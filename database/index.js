/*
* created by lu.yixin on 2018/06/12
*/

import mongo from 'mongoskin'
var db = mongo.db('mongodb://127.0.0.1:27017/test', {native_parser:true})
db.bind('test')

export default db
