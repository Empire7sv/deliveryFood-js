const menu = () => {
  'use strict';

  const restaurant = 'tanuki';

  const renderItems = data => data.forEach(item => console.log(item));

  fetch(`./db/${restaurant}.json`)
    .then(response => response.json())
    .then(data => renderItems(data))
    .catch(error => console.log(error));
};

export default menu;
