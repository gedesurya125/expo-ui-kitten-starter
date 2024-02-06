import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { CircleButton } from '../../components/CircleButton';

export const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">USERS</Text>
    <CircleButton shape="rounded" />
  </Layout>
);
