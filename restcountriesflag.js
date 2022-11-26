//2.display countries flag.
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