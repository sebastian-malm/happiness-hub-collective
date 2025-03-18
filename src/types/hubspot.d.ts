
interface HBSPTForms {
  create: (options: {
    portalId: string;
    formId: string;
    region?: string;
    target?: HTMLElement | null;
  }) => void;
}

interface Window {
  hbspt: {
    forms: HBSPTForms;
  };
}
