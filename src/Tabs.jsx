import React, {Component} from 'react';
import Loading from './Loading';

// tab panel 的一个容器作用
const TabPanel = props => (
  <div className="tab-panel">{props.activePanel}</div>
);

/**
 * 需要有 __before __after
*/
class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabActiveIndex: props.tabActiveIndex
    };
  }

  componentWillReceiveProps(newProps) {
    if(newProps.tabActiveIndex && newProps.tabActiveIndex !== this.props.tabActiveIndex){
      this.setState({
        tabActiveIndex: newProps.tabActiveIndex
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tabActiveIndex !== this.state.tabActiveIndex;
  }

  setActive(index) {
    const { onBefore, onAfter } = { ...this.props };

    onBefore && onBefore(index);
    this.setState({
      tabActiveIndex: index
    }, () => {
      onAfter && onAfter(index);
    });
  }

  render() {
    const { data } = { ...this.props };
    const tabClass = (i) => this.state.tabActiveIndex === i ? 'active tab' : 'tab';

    return (
      <div>
        <ul>
          {data.map((item, i) => {
            return (
              <li key={i} className={tabClass(i)}>
                <a onClick={this.setActive.bind(this, i)}>{item.name}</a>
              </li>
            )
          })}
        </ul>
        <TabPanel activePanel={this.props.children[this.state.tabActiveIndex]} />
      </div>
    );
  }
}

export default Tabs;
