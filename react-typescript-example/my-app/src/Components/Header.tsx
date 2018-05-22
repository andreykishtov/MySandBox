import * as React from 'react';

import styled from 'styled-components';

const Main = styled.div`
border: 1px solid black;
width:400px;
height:400px;
display:inline-block;
background:${props =>props.color};
`;

// interface HeaderProps {
// }

// const print = () => {
//   console.log('1');
// }


export const Header: React.SFC<{}> = () => {

  // const medals : string[] = ['gold' ,'silver', 'bronze'];

  // const [first,second,third] = medals;

  // const tupple: [string,number] = ['me',1];

  interface KeyValuePair<K, V> extends Array<K | V> {
    0:K,
    1:V
  }

  const tupple:KeyValuePair<string,number> = ['me',1];

    tupple[2]='xx';

    console.info(tupple);

  return Array(10).fill(0).map((item,index) => (<Main color={`#${index+index}${index}f${index+index}f${index}`}>{index}</Main>)) as any;
}
