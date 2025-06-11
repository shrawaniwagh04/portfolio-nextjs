import { PropsWithChildren, ReactNode } from "react";

export interface WithHeaderFooterProps extends PropsWithChildren {
  headerData: string[],
  children:ReactNode
} 
