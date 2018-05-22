import * as React from 'react';
import Table from './Table/Table';

export const App: React.StatelessComponent<{}> = props => {
  return (
    <div className="container-fluid">
      <Table tableName="myTable" />
      {props.children}
    </div>
  );
};
