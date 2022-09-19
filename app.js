//npm -global command , and comes with node

//npm --version

//local dependency - use it only in this particular project

//npm i <packagename>

// global dependecy - use it in any project

//package.json - manifest file (stores important info about project)
//manual approach ( create package.json file in the root , create properties etc)
//npm init

//npm init -y (everything default)
//sudo npm install -g<packageName>(mac)


const _ = require('lodash');

const items = [1,2,[3,[4,[5,6]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);