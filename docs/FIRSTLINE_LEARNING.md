# FirstLine Learning Candidates

Record reusable corrections discovered during this client project. These are candidates only and must not automatically alter `FirstLine-System`.

Suggested classifications: Missing Standard, Automation Opportunity, Design Preference, Engineering Standard, QA Requirement, Research Standard, Production Workflow Requirement, Client-Specific Exception.

## Candidate Template

### FL-CAND-000

- Issue:
- Correction:
- Reason:
- Possible global applicability:
- Evidence:
- Confidence: low/medium/high
- Suggested enforcement: reusable component / automated test / static check / written instruction

### FL-CAND-001

- Issue: Demo forms with native required fields can block the `submit` event before FirstLine demo-mode safety copy appears in browser tests and owner review.
- Correction: Add `novalidate` to demo forms or handle invalid events so demo-mode status messaging remains visible without implying a live submission.
- Reason: The local review contract is that demo forms clearly state no request was sent; browser-native validation can hide that message.
- Possible global applicability: High for all FirstLine starter/static sites using demo forms.
- Evidence: `tests/form-mode.spec.js` initially failed until the quote form used `novalidate`.
- Confidence: high
- Suggested enforcement: reusable component / automated test / written instruction
