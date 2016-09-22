import React, {Component} from 'react';
import {render} from 'react-dom';

import enhance from './EnhanceDropDown';
import DropDown from './DropDown';
const EnhanceDropDown = enhance(DropDown);

import Tabs from './Tabs';
import Slider from './Slider';

class App extends Component {
  constructor () {
    super();

    this.state = {
      optionSelected: 1,
      data: ['卢林', '龙龙', '菜锅'],
      tabData: [{
        name: 'tab1'
      }, {
        name: 'tab2'
      }]
    };
  }

  render() {
    return (
      <div>
        <EnhanceDropDown
            optionSelected={this.state.optionSelected}
            onSelect={(option) => this.setState({ optionSelected: option })}
            data={this.state.data} />

        <hr/>

        <Tabs data={this.state.tabData}
          tabActiveIndex={0}
          onBefore={() => console.log(1)}
          onAfter={() => console.log(2)}>
          <div>
            <p>我是第一个 tab</p>
            <a href="http://www.60sky.com">我的个人博客</a>
          </div>
          <div>
            <p>我是第二个 tab</p>
            <a href="http://www.60sky.com">我的个人博客</a>
          </div>
        </Tabs>

        <hr/>

        <Slider width={500} height={500} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
