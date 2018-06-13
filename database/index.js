/*
* created by lu.yixin on 2018/06/12
*/

import mongo from 'mongoskin'
var db = mongo.db('mongodb://root:123456@localhost:27017/test', {native_parser:true})
db.bind('test')

export default db
