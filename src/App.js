import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import { useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';

import firebase from './firebase';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  console.log(firebase)

  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else console.log('no permission');
  });

  const messaging = getMessaging();
  useEffect(() => {
    getToken(messaging, {
      vapidKey: 'BG4x_g9H-GPr5UQqsRsEScUHYE2AitqKkmAv3ti1pvJcWSbzP2FDLRYqisH-uk6qiANBYgSdedKSJ_9AjRZZgUQ'
    })
      .then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          console.log(currentToken);
          // ...
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.');

          // ...
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
      });
  }, []);
  // console.log(firebase);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
