
interface HBSPTForms {
  create: (options: {
    portalId: string;
    formId: string;
    region?: string;
    target?: HTMLElement | null;
    onFormReady?: () => void;
  }) => void;
}

interface Window {
  hbspt: {
    forms: HBSPTForms;
  };
}
