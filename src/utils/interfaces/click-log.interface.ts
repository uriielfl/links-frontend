export interface IClickLog {
  id: number;
  page: {
    id: number;
    title: string;
    path: string;
    createdBy: number;
  };
  url: string;
  linkClicks: {
    id: number;
    link: number;
    clickCount: number;
    clickedAt: string;
  }[];
  loaded: boolean;
}
