/*
* created by lu.yixin on 2017/12/12
*/

import mysql from 'mysql'

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'w3cbase'
});

connection.connect();

let createSql = `
CREATE TABLE IF NOT EXISTS \`article\`(
  \`Id\` INT UNSIGNED AUTO_INCREMENT,
  \`Title\` VARCHAR(100) NOT NULL,
  \`Content\` VARCHAR(40) NOT NULL,
  \`DateTime\` DATE,
  PRIMARY KEY ( \`Id\` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
`;

connection.query(createSql, (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ');
});

export default sql => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rows, fields) => {
      if (err) return reject(err);
      resolve(rows)
    })
  })
}
