/*
* created by lu.yixin on 2017/12/12
*/
import db from '../database'
const app = require('express')()

// 拦截器
app.use((req, res, next) => {
  console.log('Add user token authentication');
  next()
});

app.get('/', (req, res) => {
  db.collection('test').find().toArray(function(err, items) {
    db.close()
    res.json(items)
  })
});

export default app
