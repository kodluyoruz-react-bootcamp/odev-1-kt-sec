import getData from "./lib/service";

let data = getData(1);

data.then(function(result){
  console.log(result);
});
