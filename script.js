//let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kurukshetra';
function fun(obj){
	document.getElementById("rise").innerHTML=obj["sunrise"];
	document.getElementById("set").innerHTML=obj["sunset"];
	document.getElementById("pin").innerHTML=
	"<br><br><hr>Maximum temperature: "+obj["max_temp"]+
	"<hr>Minimum temperature: "+obj["min_temp"]+
	"<hr>Current temperature: "+obj["temp"]+
	"<hr>Wind Speed: "+obj["wind_speed"]+
	"<hr>Humidity: "+obj["humidity"]+
	"<hr> Feels like:"+obj["feels_like"]+
	"<hr> Cloud Percent:"+obj["cloud_pct"]+"<hr>";
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e0961c16dmsh1863297fe072c28p1e9a5bjsnc35f07ef9107',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let city='Delhi';
let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;

fetch(url, options).then(
 response =>  response.json())
 .then( response=>console.log(response))
. catch (err=>console.log(err)); 


document.getElementById("city").innerHTML="Displaying the weather of : "+city.toUpperCase();
fetch(url, options).then(
	response =>  response.json())
	.then( response=>fun(response))
   . catch (err=>console.log(err)); 

   function chn(){
	city=document.getElementById("searchBar").value;
	console.log(city);
	if(city==null||city==""){
		alert("Enter valid city")
	}
	else{
	let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
	document.getElementById("city").innerHTML="Displaying the weather of : "+city.toUpperCase();
	fetch(url, options).then(
		response =>  response.json())
		.then( response=>fun(response))
	   . catch (err=>console.log(err)); 


   }}