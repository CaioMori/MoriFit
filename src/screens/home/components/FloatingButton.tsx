import React from 'react';
import {Container} from './FloatingButtonStyle';
import Icon from 'react-native-remix-icon';
import {useTheme} from 'styled-components';

const FloatingButton = () => {
  const theme = useTheme();
  return (
    <Container>
      <Icon name="add-line" size="40" color={theme.colors.primary} />
    </Container>
  );
};

export default FloatingButton;
