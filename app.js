const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

console.log(myRequest.url);
console.log(myRequest.method);
console.log(myRequest.headers);
console.log(myRequest.body);


function buttonFunction() {

	fetch(myRequest)

	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return response.blob();
	})

		.then((response) => {
			myImage.src = URL.createObjectURL(response);

		})
};

// document.getElementById("tekstboks").innerHTML="Vellevois et eller andet lort på fransk";

function resetFunction() {

	document.getElementById("tekstboks").innerHTML="";

};
