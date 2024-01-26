/* eslint-disable import/order */
import { Card, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { ImageBackground } from 'react-native';

import { CardStatuses, CardWithHeaderAndFooter } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export const HomeScreen = () => (
  <Layout
    style={{
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      justifyContent: 'flex-start',
      paddingRight: 15,
      paddingLeft: 15,
    }}
  >
    <ScrollView>
      <CardOne />
      <CardWithHeaderAndFooter />
      <CardStatuses />
      <Text category="h1">HOMEEEEE</Text>
    </ScrollView>
  </Layout>
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
