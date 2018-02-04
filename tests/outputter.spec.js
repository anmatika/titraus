// @flow
const chai = require('chai');
const sinon = require('sinon');

const { assert, expect } = chai;
const outputter = require('../outputter');

const consoleSpy = sinon.spy(console, 'log');

describe('output', () => {
  outputter.print({ mlBottle: 50, mgPills: 10, mgTarget: 0.9 });
  it('console log is called', () => {
    assert.isTrue(consoleSpy.called);
  });
});

describe('calculate', () => {
  it('calculates correctly 50ml -> 4.5ml', () => {
    const result = outputter.calculate({ mlBottle: 50, mgPills: 10, mgTarget: 0.9 });
    expect(result).to.equal(4.5);
  });
  it('calculates correctly 100ml -> 9ml', () => {
    const result = outputter.calculate({ mlBottle: 100, mgPills: 10, mgTarget: 0.9 });
    expect(result).to.equal(9);
  });
  it('calculates correctly 10ml -> 10ml', () => {
    const result = outputter.calculate({ mlBottle: 10, mgPills: 10, mgTarget: 10 });
    expect(result).to.equal(10);
  });
  it('calculates correctly 100ml -> 100ml', () => {
    const result = outputter.calculate({ mlBottle: 100, mgPills: 10, mgTarget: 10 });
    expect(result).to.equal(100);
  });
  it('calculates correctly 10ml -> 5ml', () => {
    const result = outputter.calculate({ mlBottle: 10, mgPills: 10, mgTarget: 5 });
    expect(result).to.equal(5);
  });
  it('calculates correctly 100ml -> 50ml', () => {
    const result = outputter.calculate({ mlBottle: 100, mgPills: 10, mgTarget: 5 });
    expect(result).to.equal(50);
  });
  it('calculates correctly 100ml -> 50ml', () => {
    const result = outputter.calculate({ mlBottle: 100, mgPills: 5, mgTarget: 2 });
    expect(result).to.equal(40);
  });
});
