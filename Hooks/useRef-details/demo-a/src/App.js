import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [specialRowClassName, setSpecialRowClassName] = useState();
  const specialRowRef = useRef(null);

  useEffect(() => {
    // with closest method we can find another item in a non-fragile way, for example if our dom structure changes
    setSpecialRowClassName(specialRowRef.current.closest('tr').className);
  }, []);

  return (
    <div>
      <p>
        Special rows class name is: <b>{specialRowClassName}</b>
      </p>

      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Second</th>
          </tr>
        </thead>
        <tbody>
          <tr className='first-row'>
            <td>
              <div>
                <h3>Title1</h3>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
            </td>
            <td>
              <div>
                <h3>Title2</h3>
                <ul>
                  <li>Item 3</li>
                  <li>Item 4</li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className='second-row'>
            <td>
              <div>
                <h3>Title3</h3>
                <ul>
                  <li ref={specialRowRef}>Item 5</li>
                  <li>Item 6</li>
                </ul>
              </div>
            </td>
            <td>
              <div>
                <h3>Title4</h3>
                <ul>
                  <li>Item 8</li>
                  <li>Item 9</li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
