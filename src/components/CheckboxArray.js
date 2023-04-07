import "./CheckboxArray.css"
import React, { useState, useEffect } from 'react'

function CheckboxArray(properties) {
  const [selectAll, setSelectAll] = useState(false);
  const [checkedList, setChecked] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(properties.options);
  }, [properties.options]);

  const handleSelectAll = e => {
    setSelectAll(!selectAll);
    setChecked(list.map(li => li.id));
    if (selectAll) {
      setChecked([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setChecked([...checkedList, id]);
    if (!checked) {
      setChecked(checkedList.filter((item) => item !== id));
    }
  };

  const checkboxes = list.map(({ id, option, explanation }) => {
    if (explanation) {
      return (
        <div className='checkbox-wrapper'>
          <input
           className="checkbox"
            id={id}
            type="checkbox"
            onChange={handleClick}
            checked={checkedList.includes(id)}
          />
          <div className="checkbox-text">
            <p className="checkbox-option">{option}</p>
            <p className="checkbox-explanation">{explanation}</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='checkbox-wrapper'>
          <input
            className="checkbox"
            id={id}
            type="checkbox"
            onChange={handleClick}
            checked={checkedList.includes(id)}
          />
          <div className="checkbox-text">
            <p className="checkbox-option">{option}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className='checkbox-array'>
      <div className='checkbox-wrapper'>
        <input
          className="checkbox"
          id="0"
          type="checkbox"
          onChange={handleSelectAll}
          checked={selectAll}
        />
        <div className="checkbox-text">
          <p className="checkbox-option">Select All</p>
        </div>
      </div>
      {checkboxes}
    </div>
  )
}

export default CheckboxArray