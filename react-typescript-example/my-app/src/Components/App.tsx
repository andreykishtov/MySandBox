import * as React from 'react';
// import { Header } from './components';

export interface MySpace {
  mem: number;
  info: string;
  error: number;
}

const space: MySpace = {
  error: 2,
  info: 'sds',
  mem: 1
};

export const App: React.StatelessComponent<{}> = props => {
  return (
    <div className="container-fluid">
      {space.error}
      {props.children}
    </div>
  );
};
