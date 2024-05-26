import { ILinkClicks } from './link-clicks.interface';

export interface ILink {
  page?: number;
  url: string;
  linkClicks?: ILinkClicks[];
  id?: number;
  totalClicks?: number;
}
