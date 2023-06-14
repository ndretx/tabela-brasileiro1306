import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import TabelaDetails from './tabela-details';
import TeamInfo from './team-info';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabela" component={TabelaDetails} />
        <Stack.Screen name="Detalhes" component={TeamInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
