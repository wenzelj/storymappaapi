var express = require('express'),
    azureTableHelper = require('./n-azureTableHelper');

var app = module.exports = express.Router();

// This is where all calls not needing auth goes

// {
// 	"tableName": "errorLogs",
//     "partitionKey": "Date",
//     "rowKey": "Time",
//     "data":{
//     		"error": "errors message"
//     		}
//   }
//log errors 
app.post('/api/log',function(request, response){
    azureTableHelper.post(request, response);
})





