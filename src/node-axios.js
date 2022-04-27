var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('password', '111111111111111111');
data.append('image', fs.createReadStream('/C:/Users/User/Documents/all/sumona.jpg'));

var config = {
  method: 'post',
  url: 'http://127.0.0.1:8000/api/auth/create-user/',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
