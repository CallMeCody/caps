'use strict';


const events = require('./events.js');

function handlePickup(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload)
  }, 1000)

  setTimeout(() => {
    console.log(`DRIVER: Delivered' ${payload.orderID}`);
    events.emit('delivered', payload)
  }, 3000)
}

events.on('pickUp', handlePickup) 

module.exports = handlePickup