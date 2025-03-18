
import { useEffect, useRef } from 'react';

interface HubspotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  className?: string;
}

const HubspotForm = ({ portalId, formId, region = 'na1', className = '' }: HubspotFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure hbspt is available
    if (window.hbspt) {
      // Clear any existing content in the container
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }

      // Create the HubSpot form
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: formContainerRef.current,
      });
    } else {
      console.error('HubSpot script not loaded');
    }

    // Cleanup function
    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [portalId, formId, region]);

  return <div ref={formContainerRef} className={className}></div>;
};

export default HubspotForm;
