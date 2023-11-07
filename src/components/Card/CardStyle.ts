import styled from 'styled-components/native';

export const CardView = styled.TouchableOpacity<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  shadowColor?: string;
  shadowOffsetWidth?: string;
  shadowOffsetHeight?: string;
  shadowOpacity?: string;
  shadowRadius?: string;
  elevation?: string;
}>`
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'center'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'center')};
  flex-direction: ${({flexDirection}) =>
    flexDirection ? flexDirection : 'row'};
  padding: ${({padding}) => (padding ? padding : '0px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor ? backgroundColor : theme.colors.white};
  border-radius: ${({borderRadius}) => (borderRadius ? borderRadius : '5px')};
  border-width: ${({borderWidth}) => (borderWidth ? borderWidth : '1px')};
  border-color: ${({borderColor, theme}) =>
    borderColor ? borderColor : theme.colors.subText};
  width: ${({width}) => (width ? width : '100%')};
  height: ${({height}) => (height ? height : 'auto')};
  shadow-color: ${({shadowColor}) => (shadowColor ? shadowColor : '#000')};
  shadow-offset-width: ${({shadowOffsetWidth}) =>
    shadowOffsetWidth ? shadowOffsetWidth : '0px'};
  shadow-offset-height: ${({shadowOffsetHeight}) =>
    shadowOffsetHeight ? shadowOffsetHeight : '2px'};
  shadow-opacity: ${({shadowOpacity}) =>
    shadowOpacity ? shadowOpacity : '0.25'};
  shadow-radius: ${({shadowRadius}) =>
    shadowRadius ? shadowRadius : '3.84px'};
  elevation: ${({elevation}) => (elevation ? elevation : '5')};
`;
