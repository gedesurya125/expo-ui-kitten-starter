import * as eva from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApplicationProvider,
  Drawer,
  DrawerItem,
  Layout,
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

const { Navigator, Screen } = createDrawerNavigator();

const HomeScreen = () => (
  <Layout
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text category="h1">HOMEEEEE</Text>
  </Layout>
);

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const Header = (props) => (
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

const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        {/* <HomeScreen /> */}
        <AppNavigator />
      </ApplicationProvider>
      <StatusBar />
    </SafeAreaView>
  );
}
