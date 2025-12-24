import { PolicyDocument, PolicyResult } from '../types';
import { KnowledgeBase as knowledgeBase } from '../data/KnowledgeBase';

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2);
}

function calculateRelevance(caseContext: string, policy: PolicyDocument): number {
  const caseTokens = new Set(tokenize(caseContext));
  const policyTokens = new Set([
    ...tokenize(policy.policy_text),
    ...policy.keywords
  ]);

  let matchCount = 0;
  caseTokens.forEach(token => {
    if (policyTokens.has(token)) {
      matchCount++;
    }
  });

  const keywordBonus = policy.keywords.filter(keyword =>
    caseContext.toLowerCase().includes(keyword.toLowerCase())
  ).length * 2;

  return matchCount + keywordBonus;
}

export function findRelevantPolicies(
  claimType: string,
  state: string,
  description: string,
  topN: number = 3
): PolicyResult[] {
  const caseContext = `${claimType} ${state} ${description}`.trim();

  if (!caseContext) {
    return [];
  }

  const scoredPolicies: PolicyResult[] = knowledgeBase.map(policy => ({
    ...policy,
    relevanceScore: calculateRelevance(caseContext, policy)
  }));

  return scoredPolicies
    .filter(policy => policy.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, topN);
}
