import { CaseDetails } from '../types';
import { FileText } from 'lucide-react';

interface CaseDetailsPanelProps {
  caseDetails: CaseDetails;
  onFieldChange: (field: keyof CaseDetails, value: string) => void;
  onSuggestPolicy: () => void;
  isLoading: boolean;
}

export function CaseDetailsPanel({
  caseDetails,
  onFieldChange,
  onSuggestPolicy,
  isLoading
}: CaseDetailsPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="bg-blue-50 p-2 rounded-lg">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Case Details</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Case ID
          </label>
          <input
            type="text"
            value={caseDetails.caseId}
            readOnly
            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-600 font-mono text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Claim Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={caseDetails.claimType}
            onChange={(e) => onFieldChange('claimType', e.target.value)}
            placeholder="e.g., Flood, Fire, Hurricane"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State / Region <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={caseDetails.state}
            onChange={(e) => onFieldChange('state', e.target.value)}
            placeholder="e.g., Florida, California"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Case Description
          </label>
          <textarea
            value={caseDetails.description}
            onChange={(e) => onFieldChange('description', e.target.value)}
            placeholder="Enter additional case details or context..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          />
        </div>

        <button
          onClick={onSuggestPolicy}
          disabled={isLoading || !caseDetails.claimType || !caseDetails.state}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-md transition flex items-center justify-center gap-2 shadow-sm"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            'Suggest Relevant Policy'
          )}
        </button>
      </div>
    </div>
  );
}
