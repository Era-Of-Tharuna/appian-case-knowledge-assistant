import { PolicyResult } from '../types';
import { Brain, FileCheck, BookOpen } from 'lucide-react';

interface KnowledgeAssistantPanelProps {
  results: PolicyResult[];
  hasSearched: boolean;
}

export function KnowledgeAssistantPanel({ results, hasSearched }: KnowledgeAssistantPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="bg-indigo-50 p-2 rounded-lg">
          <Brain className="w-5 h-5 text-indigo-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          Appian AI Knowledge Assistant
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {!hasSearched ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Relevant policies will appear here based on the case context.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Enter case details and click "Suggest Relevant Policy" to begin.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="bg-yellow-50 p-4 rounded-full mb-4">
              <FileCheck className="w-12 h-12 text-yellow-500" />
            </div>
            <p className="text-gray-600 font-medium mb-2">No Matching Policies Found</p>
            <p className="text-gray-500 text-sm max-w-md">
              Try adjusting the claim type or adding more details to the case description.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={result.id}
                className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-md transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Policy Clause
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {result.policy_text}
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-3">
                      <div className="flex items-center gap-2 mb-2">
                        <FileCheck className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                          Verified Source
                        </span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-start">
                          <span className="text-gray-500 w-24 flex-shrink-0">
                            Document:
                          </span>
                          <span className="text-gray-900 font-medium">
                            {result.document_name}
                          </span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gray-500 w-24 flex-shrink-0">
                            Page:
                          </span>
                          <span className="text-gray-900 font-medium">
                            {result.page_number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-blue-900">Appian Integration Note:</span>{' '}
                  This AI assistant works inside Appian workflows to proactively surface verified
                  policy knowledge, reducing manual search and compliance risk.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
