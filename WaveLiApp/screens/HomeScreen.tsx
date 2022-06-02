import {SearchBtn, SearchInput, Container, Row} from './StyledComponents/HomeScreen'
import { RootTabScreenProps } from '../types';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <Container>
      <Row>
        <SearchInput 
          onChangeText={(filter:string) => {  
            console.log(filter);
          }} 
          placeholder="Search"
        />
        <SearchBtn 
          onPress={()=>{console.log("search btn pressed!")}}
        >
          <MaterialIcons name="search" size={24} color={"black"} />
        </SearchBtn>
      </Row>
    </Container>
  );
}
