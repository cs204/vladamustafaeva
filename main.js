const {successor, actions, goalTest} = require('./game.js')
const {search} = require('./search.js')
search('a', goalTest, actions, successor)