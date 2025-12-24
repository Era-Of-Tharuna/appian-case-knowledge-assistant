import { useState, useEffect } from 'react';
import { CaseDetails, PolicyResult } from './src/types';
import { CaseDetailsPanel } from './src/components/CaseDetailsPanel';
import { KnowledgeAssistantPanel } from './src/components/KnowledgeAssistantPanel';
import { generateCaseId } from './src/utils/caseldGenerator';
import { findRelevantPolicies } from './src/utils/policyMatcher';
import { Building2 } from 'lucide-react';

function App() {
  const [caseDetails, setCaseDetails] = useState<CaseDetails>({
    caseId: generateCaseId(),
    claimType: '',
    state: '',
    description: ''
  });

  const [policyResults, setPolicyResults] = useState<PolicyResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (field: keyof CaseDetails, value: string) => {
    setCaseDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSuggestPolicy = () => {
    setIsLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      const results = findRelevantPolicies(
        caseDetails.claimType,
        caseDetails.state,
        caseDetails.description
      );
      setPolicyResults(results);
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    document.title = 'Appian Case Management - AI Knowledge Assistant';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Enterprise Case Management System
              </h1>
              <p className="text-sm text-gray-500">
                Intelligent Knowledge Retrieval for Complex Cases
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          <div className="flex flex-col">
            <CaseDetailsPanel
              caseDetails={caseDetails}
              onFieldChange={handleFieldChange}
              onSuggestPolicy={handleSuggestPolicy}
              isLoading={isLoading}
            />
          </div>

          <div className="flex flex-col overflow-hidden">
            <KnowledgeAssistantPanel
              results={policyResults}
              hasSearched={hasSearched}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
