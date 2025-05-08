import { IonModal } from '@ionic/react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onDidDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onDidDismiss
}: ModalProps) => {
  return (
    <IonModal id='dialog' isOpen={isOpen} onDidDismiss={onDidDismiss}>
      <div className='p-4'>{children}</div>
    </IonModal>
  );
};

export default Modal;
