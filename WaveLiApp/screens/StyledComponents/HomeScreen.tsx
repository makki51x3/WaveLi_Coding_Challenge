import styled from 'styled-components/native'
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:${Colors.light.background};
  width:70%;
  align-self: center;
`;
export const SearchInput = styled.TextInput`
  /* flex:1; */
  width:70%;
  text-align: 'center';
  padding:0.3%;
  margin:10px;
  margin-right:0;
  border-width: 1;
  border-color: 'black';
  font-size: 14;
  background-color: 'white';
  border-radius:5;
`;

export const SearchBtn = styled.TouchableOpacity`
  margin:0.01%;
  justify-content:"space-around";
`;

export const Row = styled.View`
  justify-content:"center";
  flex-direction:"column";
`;