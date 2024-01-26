import { getHeaderTitle } from '@react-navigation/elements';
import {
  TopNavigation as UiTopNavigation,
  TopNavigationAction,
  Icon,
  Layout,
} from '@ui-kitten/components';
import React from 'react';

// ? we have ro rely on the current available icon in this site https://akveo.github.io/eva-icons/#/

const MenuIcon = ({ navigation }) => (
  <TopNavigationAction
    icon={<Icon name="menu-2-outline" />}
    onPress={navigation.openDrawer}
  />
);

const AccessoryRight = () => {
  return (
    <Layout style={{ flexDirection: 'row' }}>
      <TopNavigationAction icon={<Icon name="shopping-cart-outline" />} />
      <TopNavigationAction icon={<Icon name="person-outline" />} />
    </Layout>
  );
};

export const NavigationBar = ({ navigation, route, options }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <UiTopNavigation
      accessoryLeft={() => <MenuIcon navigation={navigation} />}
      title={title}
      accessoryRight={() => <AccessoryRight navigation={navigation} />}
    />
  );
};
