//Migrar o App.tsx para um novo arquivo 
//é mais facil que componentizar o codigo a partir dele 

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/pages/home-page';
import DetailsPage from './src/pages/detail-page';


//definiçao da constante de navegação
const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component={HomePage} />
                <Stack.Screen name='detail' component={DetailsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}