var expect = require('chai').expect,
	UUID = require('../main/uuid');

describe ('A Universally Unique IDentifier designed by RFC4122 v4 ', function () {

	var getUuidList = function (length) {
		var start = 0, end = 0, list = [];

		start = new Date().getMilliseconds();
		while (length > 0) {
			list.push(UUID.generate());
			length--;
		}
		end = new Date().getMilliseconds();

		return ({
			list: list,
			time: (end - start)
		});
	}


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
		it ('is expected to be not wrapped in curly braces.', function () {
			expect(UUID.generate().substr(0, 1)).to.not.deep.equal('{', 'starts with ´{´.');
			expect(UUID.generate().substr(35, 1)).to.not.deep.equal('}', 'ends with ´{´.');
		});
		it ('is expected to contain four ´-´ delimiter.', function () {
			expect(UUID.generate().split('-')).to.have.length(5, 'more than four delimiters.');
		});
		it ('is expected to have a four char at 15th position.', function () {
			expect(UUID.generate().substr(14, 1)).to.deep.equal('4');
		});	
		it ('is expected to have one of 8, 9, a, b char at 20th position.', function () {
			expect(UUID.generate().substr(19, 1)).to.deep.match(/^[89abAB]/);
		});
	});
	
	describe ('should provids random value and ', function () {
		it ('is expected that two values are not equal to each other.', function () {
			expect (UUID.generate()).to.not.deep.equal(UUID.generate(), 'both UUIDs are equal.');
		});
	});

	describe ('should generats values fast and ', function () {
		it ('is expected one UUID value is generated within 2ms.', function () {
			var uuidListLength = 1,
				minimumTime = 0,
				maximumTime = 2,
				response = {};

			response = getUuidList(uuidListLength);

			expect (response.list).to.have.length(uuidListLength, 'there less than 1 UUIDs.');
			expect (response.time).to.be.least(minimumTime, 'no time spend.');
			expect (response.time).to.be.below(maximumTime, 'costs more time.');
		});

		it ('is expected 1000 UUID values are generated within 2ms.', function () {
			var uuidListLength = 1000,
				minimumTime = 0,
				maximumTime = 2,
				response = {};

			response = getUuidList(uuidListLength);

			expect (response.list).to.have.length(uuidListLength, 'there less than 1000 UUIDs.');
			expect (response.time).to.be.least(minimumTime, 'no time spend.');
			expect (response.time).to.be.below(maximumTime, 'costs more time.');
		});
	});
});