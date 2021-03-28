'use strict';

const faker = require('faker');

const handlePickup = require('./driver.js');
const events = require('./events.js');
require('./vendor.js');
require('./driver.js');

events.on('pickup', handlePickup);
events.on('in-transit', sendMessage);
events.on('delivered', sendMessage);

function sendMessage(payload) {
  console.log('EVENT', { event: ``, time: `${faker.date.soon()}`, payload });
} 

module.exports = {
  sendMessage,
}