import { ILink } from './link.interface';

export interface IPage {
  title: string;
  path: string;
  loaded?: boolean;
  links?: ILink[];
  id?: number;
}
