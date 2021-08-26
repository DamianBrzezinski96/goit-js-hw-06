const form = document.querySelector(".login-form");

function handleSubmit(e) {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;

    if (email.value === "" || password.value === "") {
        console.log("Uzupełnij pola Szanowny Użytkowniku/Please fill in all fields");
        return alert("Uzupełnij pola Szanowny Użytkowniku/Please fill in all fields");
    };
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
};
    
form.addEventListener("submit", handleSubmit);