import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const HomeText = styled.Text<{
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  align?: string;
}>`
  color: ${({color, theme}) => (color ? color : theme.colors.text)};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({fontSize}) => (fontSize ? fontSize : '20px')};
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 'bold')};
  text-align: ${({align}) => (align ? align : 'center')};
`;

export const HomeImage = styled.Image`
  width: 50%;
  height: 100px;
`;

export const HomeView = styled.View<{
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
}>`
  justify-content: ${({justifyContent}) =>
    justifyContent ? justifyContent : 'center'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'center')};
  flex-direction: ${({flexDirection}) =>
    flexDirection ? flexDirection : 'row'};
  padding: ${({padding}) => (padding ? padding : '0px')};
  margin: ${({margin}) => (margin ? margin : '0px')};
  background-color: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : 'transparent'};
  width: ${({width}) => (width ? width : 'auto')};
  height: ${({height}) => (height ? height : 'auto')};
`;
