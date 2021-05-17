import { RecoilRoot } from "recoil";

export interface ContextProviderProps {
  children: any;
}

export const ContextProvider: React.FC<ContextProviderProps> = (props) => (
  <RecoilRoot children={props.children} />
);

 