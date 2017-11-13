import React from 'react';
import styled from 'styled-components';

const WishWrapper = styled.div`margin-top: 5vh;`;

const Wrapper = styled.div`
  align-items: flex-end;
  justify-content: flex-start;
  min-width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
margin:10px 0;
  background: ${props => (props.active ? '#568d8a' : 'white')};
  padding: 10px;
  font-size: 15px;
  box-shadow: 2px 2px 5px #888888;
  cursor: pointer;
  :hover {
    color: white;
    background: #568d8a;
  }
`;

const I = styled.i`
  color: white;
  margin-left: 5px;
`;

const P = styled.p``;

class WishList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortMethod: [
        {
          id: 1,
          title: 'title',
          state: false
        },
        {
          id: 2,
          title: 'price',
          state: false
        },
        {
          id: 3,
          title: 'rating',
          state: false
        }
      ]
    };
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass(id) {
    let sortMethod = this.state.sortMethod.map(
      item => (item.id !== id ? { ...item, state: false } : { ...item, state: !item.state })
    );
    this.setState({ sortMethod });
  }

  render() {
    let { list, handleOnClose, sortBy, children } = this.props;
    return (
      <Wrapper>
        <div>
          {this.state.sortMethod.map(item => (
            <A
              key={item.id}
              active={item.state}
              onClick={() => {
                sortBy(item.title);
                this.addActiveClass(item.id);
              }}
            >
              <span>{item.title}</span>
              <I className="fa fa-angle-down" />
            </A>
          ))}
        </div>
        <WishWrapper>{children}</WishWrapper>
        {children.length !== 0 && (
          <P>
            Total:$
            {children.reduce((start, item) => start + parseFloat(item.props.price), 0)}
          </P>
        )}
      </Wrapper>
    );
  }
}

export default WishList;

// // Signature may look fancy but it's just
// // a function that takes a component and returns a new component
// const wrapHOC = (WrappedComponent) => (props) => (
//   <div>
//     <div>header</div>
//     <div><WrappedComponent {...props}/></div>
//     <div>footer</div>
//   </div>
// )

// const App = () => <div>Hello</div>;

// const WrappedApp = wrapHOC(App);

//list.map(item => <WishItem {...item} handleOnClose={handleOnClose} />)
