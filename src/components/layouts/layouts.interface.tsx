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
}
