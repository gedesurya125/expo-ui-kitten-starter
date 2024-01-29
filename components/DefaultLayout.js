import { Layout } from '@ui-kitten/components';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
// TODO: USE THIS COMPONENT AS A DEFAULT SCROLL LAYOUT

export const DefaultLayout = ({ children, style = {}, ...props }) => {
  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        ...style,
      }}
      {...props}
    >
      <ScrollView
        style={{
          paddingRight: 15,
          paddingLeft: 15,
        }}
      >
        {children}
      </ScrollView>
    </Layout>
  );
};
