import { Icon, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { DefaultLayout } from '../../components';
import { ImageBackground } from 'react-native';
import { ButtonsShowcase } from '../../components/ButtonsShowcase';

export const WelcomeScreen = () => {
  return (
    <DefaultLayout>
      <HeadBanner />
      <ButtonsShowcase />
      <Text>WelcomeScreen</Text>
    </DefaultLayout>
  );
};

const HeadBanner = () => {
  return (
    <ImageBackground
      source={require('../../assets/rm222-mind-16.jpg')}
      style={{
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text appearance="alternative" category="h1">
        Ambratect
      </Text>
    </ImageBackground>
  );
};
