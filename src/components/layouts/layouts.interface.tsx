import { ReactNode } from "react";

export interface FlexLayoutPropsI {
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  flexWrap?: string;
  children?: ReactNode;
}

export interface DividerLayoutPropsI {
  borderColor?: string;
  size?: number;
  py?: string;
}

export interface ItemGridLayoutPropsI {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  customStyles?: any;
  children?: ReactNode;
}

export interface ContainerGridLayoutPropsI {
  spacing?: any;
  rowSpacing?: number;
  columnSpacing?: number;
  customStyles?: any;
  children?: ReactNode;
}
