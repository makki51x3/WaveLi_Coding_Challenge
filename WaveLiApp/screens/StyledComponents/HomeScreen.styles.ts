import styled, { css } from 'styled-components/native'
import Colors from '../../assets/constants/Colors';
import { Platform } from 'react-native';
import {pressable} from '../../types'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding:3%;
  background-color:${Colors.light.background};
  ${Platform.select({ ios: css`width: 100%`, android: css`width: 100%`, default: css`width: 50%`,})};
  align-self: center;
`;
export const SearchInput = styled.TextInput`
  flex:1;
  padding:7px;
  font-size: 14px;
  background-color: white;
`;

export const SearchBtn = styled.TouchableOpacity`
  justify-content:center;
  padding:5px;
`;

export const SearchBar = styled.View`
  flex-direction:row;
  margin-top:15px;
  border-width: 1px;
  border-color: ${Colors.light.tint};
  border-radius:10px;
`;

export const Row = styled.View`
  flex-direction:row;
`;

export const TitleHeader = styled.Text`
  font-size:21px;
  font-weight:bold;
  text-align:left;
  
  ${Platform.select({ ios: css`margin-top:7%;`, android: css`margin-top:7%;`, default: css`margin-top:3%;`})};
`;

export const PressableTitleHeader= styled.Text<pressable>`
  font-size:21px;
  ${({ pressed }) => (pressed?css`font-weight:bold`:css`font-weight:normal`)};
  ${({ pressed }) => (pressed?css`text-decoration: underline`:css`text-decoration:none`)};
  text-align:left;
`;

export const NavigationHeader = styled.View`
  flex-direction:row;
  justify-content:space-evenly;
  margin-top:15px;
`;
