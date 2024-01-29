import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const PeopleIcon = (props) => <Icon {...props} name="people-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const QuickActionIcon = (props) => (
  <Icon {...props} name="rewind-right-outline" />
);

export const BottomNavigationTabThemingShowcase = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab icon={HomeIcon} title="Home" />
      <BottomNavigationTab icon={PeopleIcon} title="Users" />
      <BottomNavigationTab icon={BellIcon} title="Orders" />
      <BottomNavigationTab icon={QuickActionIcon} title="TRANSACTIONS" />
    </BottomNavigation>
  );
};
