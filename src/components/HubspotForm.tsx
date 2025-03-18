
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
  isButton?: boolean;
  buttonText?: string;
  formUrl?: string;
}

const HubspotForm = ({ 
  portalId, 
  formId, 
  region = 'na1', 
  className = '',
  isButton = false,
  buttonText = 'Join the newsletter',
  formUrl
}: HubspotFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);

  const openFormInNewWindow = () => {
    if (formUrl) {
      window.open(formUrl, '_blank');
    }
  };

  useEffect(() => {
    // Only create embedded form if not in button mode
    if (!isButton && !formLoadedRef.current && formContainerRef.current) {
      // Clear any existing content in the container
      formContainerRef.current.innerHTML = '';
      
      // Check if HubSpot script is loaded
      if (window.hbspt) {
        try {
          // Create the HubSpot form
          window.hbspt.forms.create({
            portalId,
            formId,
            region,
            target: formContainerRef.current,
            onFormReady: () => {
              formLoadedRef.current = true;
              console.log('HubSpot form loaded successfully');
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
        }
      } else {
        console.error('HubSpot script not loaded');
      }
    }

    // Cleanup function
    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
      formLoadedRef.current = false;
    };
  }, [portalId, formId, region, isButton]);

  if (isButton) {
    return (
      <Button 
        onClick={openFormInNewWindow} 
        className={`bg-amber-500 hover:bg-amber-600 text-white ${className}`}
      >
        {buttonText} <ArrowRight className="ml-1" size={16} />
      </Button>
    );
  }

  return <div ref={formContainerRef} className={className}></div>;
};

export default HubspotForm;
