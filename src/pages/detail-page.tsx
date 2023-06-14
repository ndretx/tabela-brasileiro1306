import { View, Text } from "react-native";
import {Image} from 'expo-image'

interface Props{
    navigation: any;
}

export default function DetailsPage ({route,navigation}) {
    
    
    // Padrão de desconstrução 
    const {teams:{
        id, 
        team_name, 
        pontos, 
        position, 
        teamShield} = route.params,
    
        return (
            <View>
                <Text> {team_name}</Text>
                <Image source={teamShield)}></Image>
                
            </View>
        );
    }}
