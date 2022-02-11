const d= new Date();
document.getElementById("demo").innerHTML = d;
console.log(d);
setTimeout(()=>{window.alert(d);}, 2000);

