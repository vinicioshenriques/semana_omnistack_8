'use strict';

var Input = require('postcss/lib/input');

var SafeParser = require('./safe-parser');

module.exports = function safeParse(css, opts) {
  var input = new Input(css, opts);

  var parser = new SafeParser(input);
  parser.parse();

  return parser.root;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZmUtcGFyc2UuZXM2Il0sIm5hbWVzIjpbIklucHV0IiwicmVxdWlyZSIsIlNhZmVQYXJzZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwic2FmZVBhcnNlIiwiY3NzIiwib3B0cyIsImlucHV0IiwicGFyc2VyIiwicGFyc2UiLCJyb290Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVFDLFFBQVEsbUJBQVIsQ0FBZDs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7O0FBRUFFLE9BQU9DLE9BQVAsR0FBaUIsU0FBU0MsU0FBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzlDLE1BQU1DLFFBQVEsSUFBSVIsS0FBSixDQUFVTSxHQUFWLEVBQWVDLElBQWYsQ0FBZDs7QUFFQSxNQUFNRSxTQUFTLElBQUlQLFVBQUosQ0FBZU0sS0FBZixDQUFmO0FBQ0FDLFNBQU9DLEtBQVA7O0FBRUEsU0FBT0QsT0FBT0UsSUFBZDtBQUNELENBUEQiLCJmaWxlIjoic2FmZS1wYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElucHV0ID0gcmVxdWlyZSgncG9zdGNzcy9saWIvaW5wdXQnKVxuXG5jb25zdCBTYWZlUGFyc2VyID0gcmVxdWlyZSgnLi9zYWZlLXBhcnNlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2FmZVBhcnNlIChjc3MsIG9wdHMpIHtcbiAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXQoY3NzLCBvcHRzKVxuXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBTYWZlUGFyc2VyKGlucHV0KVxuICBwYXJzZXIucGFyc2UoKVxuXG4gIHJldHVybiBwYXJzZXIucm9vdFxufVxuIl19
