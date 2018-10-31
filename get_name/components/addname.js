const mysql = require('mysql');
const mysqlInfo = require('./mysqlinfo');

const connection = mysql.createConnection({
  host:mysqlInfo.host,
  user:mysqlInfo.user,
  password:mysqlInfo.password,
  port:mysqlInfo.port
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
})

const addname = (request,response) => {
  // 连接mysql


  let data;
  request.on('date',chunk => {
    data += chunk;
  });
};