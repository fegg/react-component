import React, {Component} from 'react';
import {render} from 'react-dom';

import enhance from './EnhanceDropDown';
import DropDown from './DropDown';

const EnhanceDropDown = enhance(DropDown);

class App extends Component {
  constructor () {
    super();

    this.state = {
      optionSelected: 1,
      data: ['卢林', '素素', '豪豪']
    };
  }

  render() {
    return (
      <div>
        <EnhanceDropDown
            optionSelected={this.state.optionSelected}
            onSelect={(option) => this.setState({ optionSelected: option })}
            data={this.state.data} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
