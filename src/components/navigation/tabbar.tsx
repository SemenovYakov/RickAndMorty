import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Routes} from './routes';
import {CharacterScreen} from '../../screens/CharacterScreen';
import {LocationScreen} from '../../screens/LocationScreen';
import {EpisodeScreen} from '../../screens/EpisodeScreen';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <Tab.Navigator initialRouteName={Routes.CharacterScreen}>
      <Tab.Screen
        name={Routes.CharacterScreen}
        component={CharacterScreen}
        options={{
          headerTitle: 'Characters',
        }}
      />
      <Tab.Screen
        name={Routes.LocationScreen}
        component={LocationScreen}
        options={{
          headerTitle: 'Location',
        }}
      />

      <Tab.Screen
        name={Routes.EpisodeScreen}
        component={EpisodeScreen}
        options={{
          headerTitle: 'Episode',
        }}
      />
    </Tab.Navigator>
  );
};
