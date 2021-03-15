import React from 'react';
import Nouislider from 'react-nouislider';

const Main = () => {
    const [value, setValue] = React.useState([500, 1000]);
    return (
        <div>
           <Nouislider
    range={{min: 0, max: 555500}}
    start={[0, 100]}
    tooltips
  />, document.querySelector('#container')
        </div>
    );
};

export default Main;