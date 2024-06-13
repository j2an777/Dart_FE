import { setupWorker } from 'msw/browser';
import { handlers } from './handler';
import { memberHandler } from './membrerHandler';
import { keywordHandler } from './keywordHandler';

export const worker = setupWorker(...handlers, ...memberHandler, ...keywordHandler);
