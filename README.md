# uuid.js
A Universally Unique IDentifier generator for JavaScript designed by RFC4122 v4 ([random numbers][1]).
UUIDs are stored as 128-bit values, and are commonly displayed as 32 hexadecimal digits with groups separated by hyphens, such as {xxxxxxxx-xxxx-4xxx-Nxxx-xxxxxxxxxxxx}.[spec][2][wiki][3]

UUID code was an answer to stackoverflow question [Create GUID / UUID in JavaScript?][4] endered by Jeff Ward (jcward.com).

###How to install 
UUID generator is provided as AMD, CommonJs or global variable at window object.
Use `npm install https://github.com/ronny-springer/uuid.js --save-dev` to install code as development dependency.

###How to run test
Test cases are written with mocha and chai.
Use `npm test` to run all test cases.

[1]: https://en.wikipedia.org/wiki/Universally_unique_identifier
[2]: http://www.ietf.org/rfc/rfc4122.txt
[3]: https://en.wikipedia.org/wiki/Universally_unique_identifier
[4]: http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
