import * as eva from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApplicationProvider,
  Drawer,
  DrawerItem,
  Text,
  IndexPath,
  IconRegistry,
  Divider,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text as RnText,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

import { NavigationBar } from './components';
import { HomeScreen } from './screens/homeScreen/HomeScreen';
import { UsersScreen } from './screens/userScreen/UserScreen';
import { OrdersScreen } from './screens/OrderScreen';

const { Navigator, Screen } = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppNavigator />
      </ApplicationProvider>
      <StatusBar />
    </SafeAreaView>
  );
}

const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    header={Header}
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
  >
    <DrawerItem title="Home" />
    <DrawerItem title="Users" />
    <DrawerItem title="Orders" />
  </Drawer>
);

export const DrawerNavigator = () => (
  <Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: true,
      header: NavigationBar,
    }}
  >
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

const Header = (props) => {
  return (
    <>
      <ImageBackground
        style={{
          ...props.style,
          // height: 128,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}
        source={require('./assets/rm222-mind-16.jpg')}
      >
        <Image
          source={require('./assets/peoplePict.jpeg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
        />
        <Text appearance="alternative" category="h6">
          Sales Name
        </Text>
        <Text appearance="alternative" category="p2">
          sales@example.com
        </Text>
      </ImageBackground>
      <Divider />
    </>
  );
};
