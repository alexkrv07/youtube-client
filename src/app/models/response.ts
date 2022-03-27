import { ItemRasponse } from './item-response';
import { PageInfo } from './page-info';

export interface Response {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: ItemRasponse[]
}
