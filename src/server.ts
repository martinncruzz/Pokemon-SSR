import { CommonEngine } from '@angular/ssr/node';
import { render } from '@netlify/angular-runtime/common-engine.mjs';

const commonEngine = new CommonEngine();

export async function netlifyCommonEngineHandler(
  _request: Request,
  _context: any
): Promise<Response> {
  return await render(commonEngine);
}
