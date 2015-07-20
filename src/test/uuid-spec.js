var expect = require('chai').expect,
	UUID = require('../main/uuid');

describe ('A Universally Unique IDentifier designed by RFC4122 v4 ', function () {

	describe ('should follows the semantics and ', function () {
		it ('is expected to generate a string value.', function () {
			expect(UUID.generate()).to.be.a('string');
		});
		it ('is expected to have length of 36 chars.', function () {
			expect(UUID.generate()).to.have.length(36);
		});
		it ('is expected to contain only hex char values.', function () {
			expect(UUID.generate()).to.deep.match(/^[0-9a-fA-F\-]/);
			expect(UUID.generate()).to.not.deep.match(/^[g-z]/, 'matches non-hex values.');
		});
		it ('is expected to contain four ´-´ delimiter.', function () {
			expect(UUID.generate().split('-')).to.have.length(5, 'more than four delimiters.');
		});
		it ('is expected to have a four at 15th position.', function () {
			expect(UUID.generate().substr(14, 1)).to.deep.equal('4');
		});		
	});
	
	describe ('should provids random value and ', function () {
		it ('is expected that two values are not equal to each other.', function () {
			expect (UUID.generate()).to.not.deep.equal(UUID.generate(), 'both UUIDs are equal.');
		});
	});

	describe ('should generats values fast and ', function () {
		it ('is expected to respond within 2ms.', function () {
			var start = 0, end = 0;

			start = new Date().getMilliseconds();
			UUID.generate();
			end = new Date().getMilliseconds();

			expect (end - start).to.be.below(2, 'costs more time.');
		});
	})

});