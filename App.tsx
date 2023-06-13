
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import TeamEntity from './entities/team_entity';
import { Image } from 'expo-image';




export default function App() {

  const [teams, setTeam] = useState<TeamEntity[]>([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer test_2325423793e6abb78cc8f5240c5cf8"  );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };
    let teamsPosition: TeamEntity[] = [];

    fetch("https://api.api-futebol.com.br/v1/campeonatos/10/tabela", requestOptions)
      .then((response => response.text()))
      .then(result => JSON.parse(result))
      .then(dataJson => {
        dataJson.map((teams) => {


          const dataTeam = {
            id: teams['time']['time_id'],
            team_position: teams['posicao'],
            team_shield_url: teams['time']['escudo'],
            team_name: teams['time']['nome_popular'],
            team_points: teams['pontos']
          };
          teamsPosition.push(dataTeam);
        });
        setTeam(teamsPosition);
        console.log(teamsPosition);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela Brasileirão </Text>
      <View style={styles.table}>
        <FlatList
          data={teams}
          keyExtractor={( item ) => item.id.toString()}
          renderItem={(teams) =>
            <View style={styles.item}>
              <Image  style={styles.teamShield} source={{ uri: teams.item.team_shield_url }} />
              <Text style={styles.teamDetails}>{teams.item.team_position}</Text>
              <Text style={styles.teamName}>{teams.item.team_name}</Text>
              <Text style={styles.teamPoints}>{teams.item.team_points}</Text>
            </View> 
          }
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  table: {
    backgroundColor: '#D3D3D3',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  teamShield: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  teamDetails: {
    marginHorizontal: 10,
    
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginHorizontal : 40
    
  },
  teamPoints: {
   position: 'absolute',
   right: 0,
   marginHorizontal: 20,
   fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  },
 
);


