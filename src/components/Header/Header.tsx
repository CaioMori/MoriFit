import React from 'react';

import {Container, HeaderText, HeaderView} from './HeaderStyle';

const Header = () => {
  return (
    <Container>
      <HeaderView padding="8px">
        <HeaderText>MoriFit</HeaderText>
      </HeaderView>
    </Container>
  );
};

export default Header;
