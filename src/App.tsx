import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme styles */
import './theme/styles.css';

/* Swiper CSS */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Capacitor } from '@capacitor/core';
import { MainRoutes } from './routes';

setupIonicReact({
  mode: Capacitor.getPlatform() === 'ios' ? 'ios' : 'md'
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <MainRoutes />
    </IonReactRouter>
  </IonApp>
);

export default App;
