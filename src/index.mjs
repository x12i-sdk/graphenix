import assert from 'node:assert/strict';
import { createContentPipelineReferencePlan, validateExecutablePlan } from '@x12i/graphenix';

const plan = createContentPipelineReferencePlan({ jobId: 'demo-job' });
const result = validateExecutablePlan(plan);
assert.equal(result.valid, true, JSON.stringify(result.errors));
assert.equal(validateExecutablePlan({}).valid, false);
console.log({ valid: result.valid, plan });
// This consumes the umbrella exports without executing any model or graph unit.
