import './DatePicker.scss';
import React, { Component } from 'react';
import DatePickerHeader from './DatePickerHeader';

class DatePicker extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="ui-datePicker">
        <DatePickerHeader currentText="2016" />
        <div className="content">

        </div>
      </div>
    );
  }
}

export default DatePicker;
