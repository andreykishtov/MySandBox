import * as React from 'react';
import styled from 'styled-components';

import *as JSON from '../../Data/moch';
declare module "*.json" {
  const value: any;
  export default value;
}


export interface TableProps {
  tableName: string;
}

export interface TableState {
  click: string;
}


const TableComp = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`


const Th = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

const Tr = styled.tr`
:nth-child(even) {
  background-color: #dddddd;
}
`;

export default class Table extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      click: 's'
    };
  }

  public componentDidMount() {

    this.setState({JSON});
  }


  public render() {
    return (
      <div>
        <TableComp>
          <Tr>
            <Th>Company</Th>
            <Th>Contact</Th>
            <Th>Country</Th>
          </Tr>
          <Tr>
            <Td>Alfreds Futterkiste</Td>
            <Td>Maria Anders</Td>
            <Td>Germany</Td>
          </Tr>
          <Tr>
            <Td>Centro comercial Moctezuma</Td>
            <Td>Francisco Chang</Td>
            <Td>Mexico</Td>
          </Tr>
          <Tr>
            <Td>Ernst Handel</Td>
            <Td>Roland Mendel</Td>
            <Td>Austria</Td>
          </Tr>
          <Tr>
            <Td>Island Trading</Td>
            <Td>Helen Bennett</Td>
            <Td>UK</Td>
          </Tr>
          <Tr>
            <Td>Laughing Bacchus Winecellars</Td>
            <Td>Yoshi Tannamuri</Td>
            <Td>Canada</Td>
          </Tr>
          <Tr>
            <Td>Magazzini Alimentari Riuniti</Td>
            <Td>Giovanni Rovelli</Td>
            <Td>Italy</Td>
          </Tr>
        </TableComp>
      </div>
    );
  }
}
