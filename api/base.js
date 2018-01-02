/*
* created by lu.yixin on 2017/12/12
*/

import databaseConnectivity from '../database'

export const base = (req, res) => {
  databaseConnectivity('SELECT * FROM TEST').then(results => {
    res.json({
      text: results
    })
  })
}
