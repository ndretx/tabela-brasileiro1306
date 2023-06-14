import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import TeamEntity from './entities/team_entity';
import { Image } from 'expo-image';

type TeamDetailsRouteProp = RouteProp<{ Detalhes: { team: TeamEntity } }, 'Detalhes'>;

export default function TeamInfo() {
    const route = useRoute<TeamDetailsRouteProp>();
    const { team } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.teamName}>{team.team_name}</Text>
            <Text style={styles.teamDetails}>{team.team_position}ª colocação </Text>
            <Image style={styles.teamShield} source={{ uri: team.team_shield_url }} />
            
            <View style={styles.teamStatus}>
            <Text style={styles.teamPoints}> Estatísticas </Text>
            <Text style={styles.teamPoints}>Pontuação:{team.team_points}</Text>
            <Text style={styles.teamPoints}>Gols Pró: {team.team_goals}</Text>
            
            <Text style={styles.teamPoints}>Gols Contra: {team.team_against}</Text>
            <Text style={styles.teamPoints}>Saldo de Gols: {team.team_goalDiference}</Text>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4BCC2',
        alignItems: 'center',
        
        
    },
    teamShield: {
        width: 200,
        height: 200,
        margin: 50,
    },
    teamStatus: {
        
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    teamDetails: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginBottom: 10,
    },
    teamName: {
        fontSize: 30,
        marginVertical: 35,
    },
    teamPoints: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
    },
});
