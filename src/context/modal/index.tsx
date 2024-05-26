import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { ReactNode, createContext, useContext, useState } from 'react';

import { IDialog } from 'utils/interfaces/dialog.interface';

interface IModalContext {
  triggerModal: (dialog: IDialog) => void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

interface IModalProvider {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IModalProvider) => {
  const [dialog, setDialog] = useState<IDialog>({
    open: false,
    title: '',
    message: '',
    confirmText: 'Confirmar',
    cancelText: 'Cancelar',
    onConfirm: () => {},
  });

  const handleClose = () => {
    setDialog({
      open: false,
    } as IDialog);
  };

  const handleConfirm = () => {
    setDialog({
      open: false,
    } as IDialog);
    dialog.onConfirm();
  };

  const triggerModal = (dialog: IDialog) => {
    setDialog(dialog);
  };

  return (
    <ModalContext.Provider value={{ triggerModal }}>
      <Dialog open={dialog.open} size={'sm'} handler={handleClose}>
        <DialogHeader>{dialog.title}</DialogHeader>
        <DialogBody>{dialog.message}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>{dialog.cancelText}</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleConfirm}>
            <span>{dialog.confirmText}</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
