import * as React from 'react';

export interface MainProps {
  name: string;
}

export interface MainState {
  up: number;
}

export default class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);

    this.state = {
      up: 10
    };
  }

  public clickMe = () => {
    let newUp = this.state.up;
    this.setState({ up: newUp++ });
  };

  public render() {
    const { up: upper } = this.state;
    return (
      <div>
        <div onClick={this.clickMe}>
          {this.props.name}
          {upper}
        </div>
      </div>
    );
  }
}
