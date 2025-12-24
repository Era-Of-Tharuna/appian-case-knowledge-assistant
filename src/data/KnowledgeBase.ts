import { PolicyDocument } from '../types';

export const knowledgeBase: PolicyDocument[] = [
  {
    id: '1',
    policy_text: 'For flood insurance claims in designated high-risk flood zones, coverage applies to direct physical damage caused by flooding, including overflow of inland or tidal waters, unusual and rapid accumulation of surface waters, and mudflow. Deductibles apply as specified in the policy schedule.',
    document_name: 'National Flood Insurance Policy Guidelines',
    page_number: 14,
    keywords: ['flood', 'insurance', 'water', 'damage', 'zone', 'coverage']
  },
  {
    id: '2',
    policy_text: 'In the state of Florida, all flood claims must be reported within 60 days of the loss occurrence. Documentation must include photographic evidence, third-party damage assessment, and proof of property ownership. Emergency repairs may be authorized up to $5,000 without prior approval.',
    document_name: 'Florida State Insurance Regulations',
    page_number: 42,
    keywords: ['florida', 'flood', 'claims', 'reporting', 'documentation', 'emergency']
  },
  {
    id: '3',
    policy_text: 'Hurricane damage claims require classification based on wind speed and storm surge data from the National Weather Service. Category 3 or higher storms trigger expedited processing procedures. Policyholders in coastal zones must have wind mitigation inspections on file.',
    document_name: 'Hurricane Loss Assessment Protocol',
    page_number: 8,
    keywords: ['hurricane', 'wind', 'storm', 'coastal', 'damage', 'category']
  },
  {
    id: '4',
    policy_text: 'Fire damage claims exceeding $25,000 require investigation by certified fire marshal. Arson investigation protocols must be followed when circumstances indicate suspicious origin. Temporary housing allowance up to 90 days is provided for total loss scenarios.',
    document_name: 'Property Loss Investigation Manual',
    page_number: 156,
    keywords: ['fire', 'damage', 'investigation', 'arson', 'loss', 'housing']
  },
  {
    id: '5',
    policy_text: 'California wildfire claims in designated high-risk zones require compliance with state defensible space regulations. Coverage may be reduced if property owner failed to maintain required clearance zones as documented in annual inspections.',
    document_name: 'Wildfire Risk Management Policy',
    page_number: 23,
    keywords: ['california', 'wildfire', 'fire', 'compliance', 'zones', 'clearance']
  },
  {
    id: '6',
    policy_text: 'Water damage claims must distinguish between flood (external water source) and water backup (internal plumbing failure). Standard homeowner policies cover water backup with specified limits. Mold remediation is covered only if resulting from covered peril within 72 hours.',
    document_name: 'Water Damage Coverage Standards',
    page_number: 67,
    keywords: ['water', 'damage', 'backup', 'plumbing', 'mold', 'coverage']
  },
  {
    id: '7',
    policy_text: 'Tornado and severe wind claims in the Midwest region require wind speed verification through National Weather Service reports. Roof damage must be assessed by certified inspector. Actual cash value applies to roofs over 15 years old unless replacement cost endorsement is purchased.',
    document_name: 'Severe Weather Claims Handbook',
    page_number: 91,
    keywords: ['tornado', 'wind', 'midwest', 'roof', 'damage', 'weather']
  },
  {
    id: '8',
    policy_text: 'Texas homeowners insurance claims must comply with state-mandated prompt payment laws. Insurers must acknowledge claims within 15 days and make payment or denial decision within 15 business days of receiving all documentation. Penalties apply for violations.',
    document_name: 'Texas Insurance Code - Chapter 542',
    page_number: 3,
    keywords: ['texas', 'payment', 'claims', 'compliance', 'law', 'timeline']
  },
  {
    id: '9',
    policy_text: 'Earthquake damage claims require seismological data from USGS confirming qualifying event. Foundation damage must be assessed by structural engineer. Dwelling coverage applies separately from personal property. Mandatory 10% deductible applies unless higher deductible selected.',
    document_name: 'Earthquake Insurance Technical Guide',
    page_number: 34,
    keywords: ['earthquake', 'seismic', 'foundation', 'structural', 'damage', 'engineer']
  },
  {
    id: '10',
    policy_text: 'For claims involving multiple perils (e.g., wind and flood from same storm), separate deductibles apply to each covered cause of loss. Independent adjusters must document and allocate damage to correct peril. Policyholder may dispute allocation through appraisal process.',
    document_name: 'Multi-Peril Claims Allocation Standards',
    page_number: 112,
    keywords: ['multiple', 'perils', 'wind', 'flood', 'deductible', 'allocation']
  },
  {
    id: '11',
    policy_text: 'Hail damage claims must include documentation of hail size from National Weather Service. Roof inspections should identify impact marks consistent with reported hail size. Cosmetic damage to non-functional surfaces may be excluded unless specified in policy endorsements.',
    document_name: 'Hail Damage Assessment Protocol',
    page_number: 45,
    keywords: ['hail', 'damage', 'roof', 'impact', 'cosmetic', 'weather']
  },
  {
    id: '12',
    policy_text: 'Florida hurricane claims require tracking of named storms and correlation with damage dates. Building code upgrades mandated by law are covered up to specified limits. Contents claims require detailed inventory with proof of ownership and value.',
    document_name: 'Florida Hurricane Claims Best Practices',
    page_number: 78,
    keywords: ['florida', 'hurricane', 'storm', 'building', 'code', 'contents']
  }
];
