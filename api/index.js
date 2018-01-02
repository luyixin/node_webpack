/*
* created by lu.yixin on 2017/12/12
*/
import { base } from './base'
const app = require('express')();

// 拦截器
app.use((req, res, next) => {
  console.log('Add user token authentication');
  next()
});

app.get('/', base);

export default app
