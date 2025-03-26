const form = document.querySelector(".feedback-form");

let formData = { email: "", message: "" }

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
	formData = JSON.parse(savedData);
	form.elements.email.value = formData.email;
	form.elements.message.value = formData.message;
	
}

form.addEventListener("input", (event) => {
	formData.email = form.elements.email.value;
	formData.message = form.elements.message.value;
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));

	
})

const getFirstInput = form.querySelector("input");
getFirstInput.addEventListener("click", () => getFirstInput.setAttribute("placeholder", "Type area"));

form.addEventListener("submit", (event) => {
	event.preventDefault();

	if (formData.email.trim() === "" || formData.message.trim() === "") {
		return alert(`Fill please all fields`)
	}

	console.log(formData);
	localStorage.removeItem("feedback-form-state");
	formData = { email: "", message: "" };
	form.elements.email.value = "";
	form.elements.message.value = "";

})