//1.Compare two JSON have the same properties without order.
var obj1 = {
  name: "person1",
  age: 5,
};
var obj2 = {
  age: 5,
  name: "person1",
};
const isEqual = function (obj1, obj2) {
  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === obj2Length) {
    return Object.keys(obj1).every(
      (key) => obj2.hasOwnProperty(key) && obj2[key] === obj1[key]
    );
  }
  return false;
};
console.log(isEqual(obj1, obj2));

/2.display countries flag.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var rawdata=(request.response);
    var data = JSON.parse(rawdata);
    for(let i=0;i<data.length;i++){
        console.log("png:"+data[i].flags.png,"svg:"+data[i].flags.svg)
    }
}




