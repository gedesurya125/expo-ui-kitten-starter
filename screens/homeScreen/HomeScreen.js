/* eslint-disable import/order */
import { Card, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground } from 'react-native';

import {
  CardStatuses,
  CardWithHeaderAndFooter,
  DefaultLayout,
} from '../../components';

export const HomeScreen = () => (
  <DefaultLayout>
    <CardOne />
    <CardWithHeaderAndFooter />
    <CardStatuses />
    <Text category="h1">HOMEEEEE</Text>
  </DefaultLayout>
);

const CardOne = () => {
  return (
    <Card
      style={{
        height: 200,
        alignItems: 'stretch',
        position: 'relative',
      }}
    >
      <ImageBackground
        source={require('../../assets/rm222-mind-16.jpg')}
        style={{
          flexBasis: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        imageStyle={{
          objectFit: 'cover',
        }}
      >
        <Text appearance="alternative">This is Card Example one</Text>
      </ImageBackground>
    </Card>
  );
};
