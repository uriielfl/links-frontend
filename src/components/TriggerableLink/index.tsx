import { triggerClickEvent } from 'services/link-clicks.serivce';

import { ILink } from 'utils/interfaces/link.interface';

interface ITriggerableLink {
  link: ILink;
}
export const TriggerableLink = ({ link }: ITriggerableLink) => {
  const triggerClick = () => {
    if (link.id) {
      triggerClickEvent(link.id);
    }
  };
  return (
    <>
      <a
        onClick={triggerClick}
        className="no-underline hover:underline text-blue-900"
        href={link.url}
        target="_blank"
      >
        {link.url}
      </a>
    </>
  );
};
