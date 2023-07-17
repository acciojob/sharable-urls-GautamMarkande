// your code here

const btn =  document.getElementById("button");
let h3 =  document.getElementById("url");
btn.addEventListener("click", (e)=>{
	e.preventDefault();
	let name = document.getElementById("name").value;
let year =  document.getElementById("year").value;
	console.log(name, year);
	h3.innerText = `https://localhost:8080/?name=${name}&year=${year}`;
})
