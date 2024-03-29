import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const StarIcon = (props) => <Icon {...props} name="star-outline" />;
const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size="small" />
  </View>
);
export const ButtonsShowcase = () => {
  return (
    <Layout style={styles.container}>
      <Button style={styles.button} status="primary" accessoryLeft={StarIcon}>
        PRIMARY
      </Button>
      <Button style={styles.button} status="success" accessoryRight={StarIcon}>
        SUCCESS
      </Button>
      <Button style={styles.button} status="danger" accessoryLeft={StarIcon} />
      <Button
        style={styles.button}
        appearance="ghost"
        status="danger"
        accessoryLeft={StarIcon}
      />
      <Button
        style={styles.button}
        appearance="outline"
        accessoryLeft={LoadingIndicator}
      >
        LOADING
      </Button>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
