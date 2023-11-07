import React from 'react';
import {CardView} from './CardStyle';

export interface CardProps {
  children?: React.ReactNode;
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
}

const Card = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  padding,
  margin,
  backgroundColor,
  borderRadius,
  borderWidth,
  borderColor,
  width,
  height,
  shadowColor,
  shadowOffsetWidth,
  shadowOffsetHeight,
  shadowOpacity,
  shadowRadius,
  elevation,
}: CardProps) => {
  return (
    <CardView
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      width={width}
      height={height}
      shadowColor={shadowColor}
      shadowOffsetWidth={shadowOffsetWidth}
      shadowOffsetHeight={shadowOffsetHeight}
      shadowOpacity={shadowOpacity}
      shadowRadius={shadowRadius}
      elevation={elevation}>
      {children}
    </CardView>
  );
};

export default Card;
