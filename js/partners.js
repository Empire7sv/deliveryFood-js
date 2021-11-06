'use strict';

const renderItems = data => data.forEach(item => console.log(item));

fetch('https://deliveryfood-js-default-rtdb.firebaseio.com/db/partners.json')
  .then(response => response.json())
  .then(data => renderItems(data))
  .catch(error => console.log(error));
