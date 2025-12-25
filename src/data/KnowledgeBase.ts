import { PolicyDocument } from "../types";

export const knowledgeBase: PolicyDocument[] = [
  {
    id: "1",
    policy_text:
      "For flood insurance claims in designated high-risk flood zones, coverage applies to direct physical damage caused by flooding, including overflow of inland or tidal waters, unusual and rapid accumulation of surface waters, and mudflow. Deductibles apply as specified in the policy schedule.",
    document_name: "National Flood Insurance Policy Guidelines",
    page_number: 14,
    keywords: ["flood", "insurance", "water", "damage", "zone", "coverage"]
  },
  {
    id: "2",
    policy_text:
      "In the state of Florida, all flood claims must be reported within 60 days of the loss occurrence. Documentation must include photographic evidence, third-party damage assessment, and proof of property ownership. Emergency repairs may be authorized up to $5,000 without prior approval.",
    document_name: "Florida State Insurance Regulations",
    page_number: 42,
    keywords: ["florida", "flood", "claims", "reporting", "documentation", "emergency"]
  },
  {
    id: "3",
    policy_text:
      "Hurricane damage claims require classification based on wind speed and storm surge data from the National Weather Service. Category 3 or higher storms trigger expedited processing procedures. Policyholders in coastal zones must have wind mitigation inspections on file.",
    document_name: "Hurricane Loss Assessment Protocol",
    page_number: 8,
    keywords: ["hurricane", "wind", "storm", "coastal", "damage", "category"]
  },
  {
    id: "4",
    policy_text:
      "Fire damage claims exceeding $25,000 require investigation by certified fire marshal. Arson investigation protocols must be followed when circumstances indicate suspicious origin. Temporary housing allowance up to 90 days is provided for total loss scenarios.",
    document_name: "Property Loss Investigation Manual",
    page_number: 156,
    keywords: ["fire", "damage", "investigation", "arson", "loss", "housing"]
  },
  {
    id: "5",
    policy_text:
      "California wildfire claims in designated high-risk zones require compliance with state defensible space regulations. Coverage may be reduced if property owner failed to maintain required clearance zones as documented in annual inspections.",
    document_name: "Wildfire Risk Management Policy",
    page_number: 23,
    keywords: ["california", "wildfire", "fire", "compliance", "zones", "clearance"]
  }
];
