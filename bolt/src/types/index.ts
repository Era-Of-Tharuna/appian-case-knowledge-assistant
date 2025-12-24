export interface CaseDetails {
  caseId: string;
  claimType: string;
  state: string;
  description: string;
}

export interface PolicyDocument {
  id: string;
  policy_text: string;
  document_name: string;
  page_number: number;
  keywords: string[];
}

export interface PolicyResult extends PolicyDocument {
  relevanceScore: number;
}
