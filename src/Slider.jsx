import './Slider.scss';

import React, {Component} from 'react';

/**
 * data = [{
 *  id: 0,
 *  content: 'id0'
 * }, {
 *  id: 1,
 *  content: 'id1'
 * }]
*/

const SliderArrows = props => {
  return (
    <div className="ui-sliderArrows">
      <span className="arrow prev" onClick={() => props.onGo(-1)}>&lt;</span>
      <span className="arrow next" onClick={() => props.onGo(1)}>&gt;</span>
    </div>
  );
};

const SliderDots = props => {
  return (
    <div className="ui-sliderDots">
      {props.data.map((item, i) => {
        return (<span key={i} className="dot" onClick={() => props.onGo(item.id)}>O</span>);
      })}
    </div>
  );
}

class Slider extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAutoPlay: null,
      current: 0,
      data: [{
        id: 0,
        content: 'id0'
      }, {
        id: 1,
        content: 'id1'
      }, {
        id: 2,
        content: 'id2'
      }]
    };

    this.onGo = this.onGo.bind(this);
  }

  onChange() {

  }

  onGo(id) {
    const { data, current } = { ...this.state };

    if (id >= 0) { // right
      if(current >= data.length - 1) {
        return false;
      }

      const newData = const newData = this.changeData(true);
      this.setState({
        current: current + 1,
        data: newData
      });
    } else if (id < 0) { // left
      if(current <= 0) {
        return false;
      }

      const newData = this.changeData(false);
      this.setState({
        current: current - 1,
        data: newData
      });
    }
  }

  onAutoPlay() {

  }

  onPausePlay() {

  }

  changeData(isAdd) {
    return data.map((d, i) => {
      return {
        id: isAdd ? d.id + 1 : d.id - 1,
        content: d.content
      };
    });
  }

  getItem (id) {

  }

  getNumber (s) {
    return parseInt(s, 10) || 0;
  }

  getLeft(index) {
    const width = this.props.width;
    return width * index;
  }

  render() {
    const { width, height } = { ...this.props };

    return (
      <div className="ui-slider" style={{width, height}}>
        <ul className="list" style={{height}}>
          {this.state.data.map((item, i) => {
            return (<li key={i} className="content" style={{
              left: this.getLeft(item.id),
              width,
              height
            }}>{item.content}</li>);
          })}
        </ul>
        <SliderArrows onGo={this.onGo} />
        <SliderDots data={this.state.data} onGo={this.onGo} />
      </div>
    );
  }
}

export default Slider;
