import { useState, useEffect, useRef } from 'react';

const DropDown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // here we want to close the dropdown options if we click outside, the body for example
  useEffect(() => {
    const onBodyClick = (event) => {
      // note that this type of events will execute before events set by react like onClick, etc..
      console.log('CLICK BODY - addEventListener');

      // here we want to return if the event is bubbling inside the form, because DOM event will trigger first (before react events) and will change our open value
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options
    .filter((option) => option.value !== selected.value)
    .map((option) => (
      <div
        key={option.value}
        className='item'
        // note that this event will also bubble and trigger events in the DOM tree, for example where we console.log 'On Click Event executed'
        onClick={() => {
          console.log('CLICK OPTION - react event');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    ));

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => {
            console.log('CLICK DROPDOWN - react event');
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
