import { IonRouterOutlet, useIonRouter } from '@ionic/react';
import { Route } from 'react-router';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { App } from '@capacitor/app';
import { alertController } from '@ionic/core';

import HomePage from '@/pages/home/home.page';

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const router = useIonRouter();

  useEffect(() => {
    let backButtonListener: any;

    const addBackButtonListener = async () => {
      backButtonListener = await App.addListener('backButton', async () => {
        if (location.pathname === '/') {
          const alert = await alertController.create({
            header: 'Konfirmasi',
            message: 'Apakah Anda yakin ingin keluar dari aplikasi?',
            buttons: [
              {
                text: 'Batal',
                role: 'cancel'
              },
              {
                text: 'Ya',
                handler: () => {
                  App.exitApp();
                }
              }
            ]
          });
          await alert.present();
        } else {
          router.goBack();
        }
      });
    };

    addBackButtonListener();

    return () => {
      if (backButtonListener) {
        backButtonListener.remove();
      }
    };
  }, [location]);

  return (
    <IonRouterOutlet>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </IonRouterOutlet>
  );
};

export default MainRoutes;
