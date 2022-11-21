// IMPORTS
const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("returns [Lighthouse, Labs] from [Yo Yo, Lighthouse, Labs]", () =>
  assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]))

});
