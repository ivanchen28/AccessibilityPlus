import "./BadCheckboxArray.css"
import React, { useState, useEffect } from 'react'

function BadCheckboxArray(properties) {
  const [checkedList, setChecked] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(properties.options);
  }, [properties.options]);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    const random = Math.floor(Math.random() * 2);  // 1/2 chance to fail
    if (random > 0) {
      setChecked([...checkedList, id]);
      if (!checked) {
        setChecked(checkedList.filter((item) => item !== id));
      }
    }
  };

  const checkboxes = list.map(({ id, option, explanation }) => {
    if (explanation) {
      return (
        <div className='bad-checkbox-wrapper'>
          <input
           className="bad-checkbox"
            id={id}
            type="checkbox"
            onChange={handleClick}
            checked={checkedList.includes(id)}
            tabIndex="-1"
          />
          <div className="bad-checkbox-text">
            <p className="bad-checkbox-option">{option}</p>
            <p className="bad-checkbox-explanation">{explanation}</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className='bad-checkbox-wrapper'>
          <input
            className="bad-checkbox"
            id={id}
            type="checkbox"
            onChange={handleClick}
            checked={checkedList.includes(id)}
            tabIndex="-1"
          />
          <div className="bad-checkbox-text">
            <p className="bad-checkbox-option">{option}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className='bad-checkbox-array'>
        {checkboxes}
    </div>
  )
}

export default BadCheckboxArray