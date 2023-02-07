var axios = require('axios');
var data = JSON.stringify({
    "collection": "routes",
    "database": "sample_training",
    "dataSource": "letsbowl",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-nfjsy/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'fwebuouUsGqjIHrasy7KAl6jOoU0ofU8FKkXGnoo4uZZhCHjyaOEePeKtRpTsxNv',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
