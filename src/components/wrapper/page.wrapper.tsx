import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  useIonRouter
} from '@ionic/react';
import { chevronBack, cog } from 'ionicons/icons';
import { LoadingSpinner } from '../ui';

interface PageWrapperProps {
  pageTitle: string;
  useGoBack?: boolean;
  isLoading?: boolean;
  showSetting?: boolean;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  pageTitle,
  useGoBack = false,
  isLoading = false,
  showSetting = false,
  children
}) => {
  const router = useIonRouter();

  const handleBack = () => {
    router.goBack();
  };

  return (
    <IonPage className='my-0 mx-auto min-h-full max-w-[640px]'>
      <IonHeader className='relative !shadow-none'>
        <div className='flex items-center justify-between h-[76px] px-4'>
          <div className='w-6 shrink-0'>
            {useGoBack && (
              <button onClick={handleBack}>
                <IonIcon
                  icon={chevronBack}
                  className='text-slate-700 text-[30px] mt-2'
                />
              </button>
            )}
          </div>
          <p className='text-3xl font-bold text-black'>{pageTitle}</p>
          <div className='w-6 shrink-0'>
            {showSetting && (
              <button onClick={() => {}}>
                <IonIcon
                  icon={cog}
                  className='text-slate-700 text-[30px] mt-2'
                />
              </button>
            )}
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className='py-4 px-4'>
          {isLoading ? (
            <div className='h-[70vh] flex'>
              <LoadingSpinner
                name='dots'
                divClassName='flex items-center justify-center mx-auto align-middle h-full'
              />
            </div>
          ) : (
            children
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PageWrapper;
