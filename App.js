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
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { Text as RnText, SafeAreaView, StatusBar, View } from 'react-native';

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

const DrawerContent = ({ navigation, state }) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
  >
    <DrawerItem title="Home" />
    <DrawerItem title="Users" />
    <DrawerItem title="Orders" />
  </Drawer>
);

const NavigationHeader = ({ navigation, route, options }) => {
  const title = getHeaderTitle(options, route.name);
  return (
    <View style={options.headerStyle}>
      <Text style={{ color: 'black', ...options.headerStyle }} category="p1">
        Hello{title}
      </Text>
    </View>
  );
};

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
