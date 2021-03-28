'use strict';

require('dotenv').config();
const store = process.env.STORE;
const events = require('./events.js');
const faker = require('faker');

setInterval(() => {
  let entry = {
    store: store,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.city()}, ${faker.address.stateAbbr()}`

  };
    events.emit('pickup', entry)
}, 5000)

events.on('delivered', (payload) => {
  console.log('VENDOR: thank you for delivering', payload.orderID);
})
