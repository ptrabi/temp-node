const _ = require('lodash')

const items = [1,21,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);