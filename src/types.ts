export interface GeneratedAdCampaign {
  visualConcept: string;
  headlines: string[];
  bodyCopy: string;
  targetingTips: string[];
  isSimulated?: boolean;
}

export interface AdGeneratorInputs {
  brandName: string;
  industry: string;
  brandGoal: string;
  targetPlatform: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  client: string;
  metric: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface LeadSubmission {
  name: string;
  email: string;
  company: string;
  budget: string;
  details: string;
}

export interface LeadResponse {
  success: boolean;
  roadmap: string;
  isSimulated?: boolean;
}
