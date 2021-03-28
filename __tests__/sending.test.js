'use strict';

const events = require('../events.js');

// this swaps the normal console.log funciton with a jest function for mock testing.
console.log = jest.fn();

describe('Testing the events module', () => {
  it('should console log some output', () => {
    

    let payload = { entry: { orderID: 'J21470735382' }};

    events.sendMessage(payload);
    expect(console.log).toHaveBeenCalled();
  });
});