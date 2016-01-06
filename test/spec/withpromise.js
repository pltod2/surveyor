"use strict";

module.exports = function(test, Promise) {

    var fixture = this;

    return Promise.delay(1000).then(function() {

        test.equal(fixture.fixtureKey, 'withpromise', 'withpromise spec fixture was correctly assigned');
    });
};