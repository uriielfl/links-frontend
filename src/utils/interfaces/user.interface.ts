export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  loaded?: boolean;
  comingFromHome?: boolean;
}
