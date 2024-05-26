import { ILinkClicks } from 'utils/interfaces/link-clicks.interface';

export const getTotalClicks = (linkClicks?: ILinkClicks[]) => {
  return (
    linkClicks?.reduce((prev, linkClick) => prev + linkClick.clickCount, 0) ?? 0
  );
};
