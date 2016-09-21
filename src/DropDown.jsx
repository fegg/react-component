import './DropDown.scss';

import React from 'react';

export default props => {
  const {
    isOpen,
    optionSelected,
    data,
    onSelect,
    onToggle
  } = { ...props };

  const isActive = isOpen ? 'active' : '';
  const itemClass = optionSelected === i ? 'selected item' : 'item';

  return (
    <div className="ui-dropDown">
      <div className="current" onClick={onToggle}>{data[optionSelected]}</div>
      <ul className={`${isActive} list`}>
        {data.map((item, i) => {
          return (
            <li key={i}
              className={itemClass}
              onClick={() => onSelect(i)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  )
};
