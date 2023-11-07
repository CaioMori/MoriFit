import React from 'react';

import {ThemeProvider} from 'styled-components';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import theme from './src/theme/theme';
import {HomeStackRoutes} from './src/routes/routes';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1, marginTop: 25}}>
      <ThemeProvider theme={theme}>
        <HomeStackRoutes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
