import React, { useState } from 'react';

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTitleClick = (idx) => {
    setActiveIndex(idx);
  };

  const renderedData = data.map((item, idx) => {
    const active = idx === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => handleTitleClick(idx)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.text}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedData}</div>;
};

export default Accordion;
