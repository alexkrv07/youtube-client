import { Snippet } from './snippet';
import { Statistics } from './statistics';

export interface ItemRasponse {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistics

}
