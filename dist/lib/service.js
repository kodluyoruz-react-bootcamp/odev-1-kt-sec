"use strict";// Services
const axios = require("axios");

async function getData(userid){
  var response = [];

  const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
    
    .then(resp => {
        //console.log(resp.data);
	response.push({"user":resp.data});
    })
    .catch(err => {
        // Catch some errors
        console.error(err);
    });

  const postData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    .then(resp => {
	//console.log(resp.data);
	response.push({"posts":resp.data});
    })
    .catch(err =>{
	// Catch them again
	console.error(err);
    });
  
  return response;
}


module.exports = getData;

