import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent) => (props) => {
  const { dataSource, ...otherProps } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => setData(data.slice(0, 3)));
    }, 1500);
  }, [dataSource]);

  return data.length < 1 ? (
    <h1>LOADING</h1>
  ) : (
    <WrappedComponent data={data} {...otherProps} />
  );
};

export default withData;
