import React, {useEffect, useState} from 'react';

import {ThemeProvider} from 'styled-components';

import {SafeAreaView, Text} from 'react-native';
import theme from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Text>Teste</Text>
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
