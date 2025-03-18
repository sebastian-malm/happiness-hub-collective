
import { useEffect, useRef } from 'react';

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
}

const HubspotForm = ({ portalId, formId, region = 'na1', className = '' }: HubspotFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    // Only attempt to create the form if it hasn't been loaded yet
    if (!formLoadedRef.current && formContainerRef.current) {
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
  }, [portalId, formId, region]);

  return <div ref={formContainerRef} className={className}></div>;
};

export default HubspotForm;
