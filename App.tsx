import React from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import TabelaDetails from './src/pages/tabela-details';
import TeamInfo from './src/pages/team-info';
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
