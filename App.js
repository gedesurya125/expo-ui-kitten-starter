import * as eva from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  ApplicationProvider,
  Drawer,
  DrawerItem,
  Layout,
  Text,
  IndexPath,
} from '@ui-kitten/components';
import React from 'react';

const { Navigator, Screen } = createDrawerNavigator();

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">HOME</Text>
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
export const DrawerNavigator = () => (
  <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
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
    <ApplicationProvider {...eva} theme={eva.dark}>
      {/* <HomeScreen /> */}
      <AppNavigator />
    </ApplicationProvider>
  );
}
