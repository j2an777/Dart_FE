import { setupWorker } from 'msw/browser';
import { handlers } from './handler';
import { memberHandler } from './membrerHandler';

export const worker = setupWorker(...handlers, ...memberHandler);
