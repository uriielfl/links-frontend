import { Alert, Typography } from '@material-tailwind/react';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IoClose } from 'react-icons/io5';

import { PopupColorsEnum, PopupTypesEnum } from 'utils/enums/popup-colors.enum';

interface IPopupContext {
  triggerPopup: (popup: IPopup) => void;
}

export const PopupContext = createContext<IPopupContext>({} as IPopupContext);

interface IPopupProvider {
  children: ReactNode;
}

interface IPopup {
  title: string;
  type: PopupTypesEnum;
  message: string;
}

export const PopupProvider = ({ children }: IPopupProvider) => {
  const [popup, setPopup] = useState<IPopup>({} as IPopup);
  const triggerPopup = (popup: IPopup) => {
    setPopup(popup);
  };

  const popupIsOpen = !!popup.message && !!popup.title;

  useEffect(() => {
    if (popupIsOpen) {
      setTimeout(() => {
        setPopup({} as IPopup);
      }, 3500);
    }
  }, [popup]);

  return (
    <PopupContext.Provider value={{ triggerPopup }}>
      {popupIsOpen && (
        <Alert
          className="absolute opacity-30 max-w-lg w-fit z-10 bottom-4 right-4 text-left"
          color={PopupColorsEnum[popup.type]}
          action={
            <IoClose
              className="!absolute cursor-pointer top-3 right-3"
              onClick={() => setPopup({} as IPopup)}
            />
          }
        >
          <Typography color="white" className="font-semibold">
            {popup.title}
          </Typography>
          <Typography color="white">{popup.message}</Typography>
        </Alert>
      )}
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  return useContext(PopupContext);
};
