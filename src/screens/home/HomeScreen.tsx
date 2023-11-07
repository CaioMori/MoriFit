/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import {Container, HomeText, HomeView} from './HomeScreenStyle';
import Icon from 'react-native-remix-icon';
import {useTheme} from 'styled-components';
import {FlatList} from 'react-native';
import FloatingButton from './components/FloatingButton';
import treinos from '../../mocks/Treino';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <HomeView padding="16px" flexDirection="column">
        <Card justifyContent="space-between" padding="16px">
          <Icon name="open-arm-fill" size="24" color={theme.colors.primary} />
          <HomeView flexDirection="column">
            <HomeText color="gray">Treino Atual</HomeText>
            <HomeText color="gray" fontSize="12px">
              Treino Atual
            </HomeText>
          </HomeView>
          <Icon
            name="arrow-right-s-line"
            size="32"
            color={theme.colors.primary}
          />
        </Card>
        <HomeView
          padding="24px 0 8px 0"
          justifyContent="flex-start"
          width="100%">
          <HomeText>Próximos Treinos</HomeText>
        </HomeView>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{width: '100%', height: '100%'}}
          contentContainerStyle={{paddingBottom: 100, gap: 16}}
          data={treinos}
          renderItem={({item}) => (
            <Card
              justifyContent="space-between"
              padding="16px"
              shadowColor={theme.colors.text}>
              <Icon
                name="open-arm-fill"
                size="24"
                color={theme.colors.primary}
              />
              <HomeView flexDirection="column">
                <HomeText color="gray">{item.nome}</HomeText>
              </HomeView>
              <Icon
                name="arrow-right-s-line"
                size="32"
                color={theme.colors.primary}
              />
            </Card>
          )}
          ListEmptyComponent={
            <HomeView
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%">
              <HomeText color={theme.colors.daylight}>
                Nenhum treino cadastrado
              </HomeText>
            </HomeView>
          }
        />
      </HomeView>
      <FloatingButton />
    </Container>
  );
};

export default HomeScreen;
