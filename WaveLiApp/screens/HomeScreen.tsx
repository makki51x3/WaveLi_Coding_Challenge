import {SearchBtn, SearchInput, SearchBar, Container, TitleHeader, NavigationHeader, PressableTitleHeader} from './StyledComponents/HomeScreen'
import { SafeAreaView, StatusBar } from 'react-native';

import { RootTabScreenProps } from '../types';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {fetchEvents} from './Components/FetchEvents'

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  const [Events, setEvents] = useState(true);
  const [People, setPeople] = useState(false);
  const [Groups, setGroups] = useState(false);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <TitleHeader>Find Something</TitleHeader>
      <SearchBar>
        <SearchBtn 
          onPress={()=>{
            fetchEvents();
            console.log("\n\n\nsearch btn pressed!")
          }}
        >
          <MaterialIcons name="search" size={22} color={"black"} />
        </SearchBtn>
        <SearchInput 
          onChangeText={(filter:string) => {  
            console.log(filter);
          }} 
          placeholder="Search"
        />
      </SearchBar>
      <NavigationHeader>
        <PressableTitleHeader onPress={()=>{setEvents(true);setPeople(false);setGroups(false);}} pressed={Events} >Events</PressableTitleHeader>
        <PressableTitleHeader onPress={()=>{setEvents(false);setPeople(true);setGroups(false);}} pressed={People} >People</PressableTitleHeader>
        <PressableTitleHeader onPress={()=>{setEvents(false);setPeople(false);setGroups(true);}} pressed={Groups} >Groups</PressableTitleHeader>
      </NavigationHeader>
    </Container>
  );
}

