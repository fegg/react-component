import './DatePickerHeader.scss';
import React, {Component} from 'react';

class DatePickerHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui-datePickerHeader">
        <span className="prev">
          <i className="icon-prev"></i>
        </span>
        <div className="current">
          <span className="current_text">{this.props.currentText}</span>
        </div>
        <span className="next">
          <i className="icon-next"></i>
        </span>
      </div>
    );
  }
}

export default DatePickerHeader;
