//3.Country names,regions,sub-regions and population.

var req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload=function(){
    var rawdata = (req.response);
    var data = JSON.parse(rawdata);
    for(let i=0;i<data.length;i++){
        console.log("Common Name:"+data[i].name.common,",","Region:"+data[i].region,",","Sub-region:"+data[i].subregion,",","Population:"+data[i].population)
    }
}
