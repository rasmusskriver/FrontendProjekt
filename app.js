const myImage = document.querySelector("#myImage");

const myRequest = new Request("flowers.jpg");

console.log(myRequest.url);
console.log(myRequest.method);
console.log(myRequest.headers);
console.log(myRequest.body);


function buttonFunction() {

	fetch(myRequest)

		.then((response) => {
			console.log("Fetch udført");
			if (!response.ok) {
				console.log("Fejl");
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			console.log("response er ok");
			return response.blob();
		})

		.then((response) => {
			console.log("Tilføjet billede");
			console.log(response);
			myImage.src = URL.createObjectURL(response);

		})
};

// document.getElementById("tekstboks").innerHTML="Vellevois et eller andet lort på fransk";

function resetFunction() {

	document.getElementById("tekstboks").innerHTML="";

};
