const URL = "https://restcountries.com/v3.1/all"

const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();

//xhr.onreadystatechange = () => {
  //  console.log(xhr.readystate);
//};

xhr.onload = () => {
    console.log(JSON.parse(xhr.response));

 const obj1 = JSON.parse(xhr.response);

 //obj1.data = () => {
  obj1.forEach(country => {
    console.log(country.flags.png);
 });
}
 //}}