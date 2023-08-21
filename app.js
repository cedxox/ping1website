const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");




submit.addEventListener("click", () => {
    const er = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!er.test(input.value.toLowerCase())) {
        error.style.display = "block";
        input.style.borderColor = "red";
    }
    else {
        error.style.display = "none";
        input.style.borderColor = "green";
    }
    input.value = "";
});