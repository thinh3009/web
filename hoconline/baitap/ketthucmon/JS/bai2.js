document.querySelector("#f1").addEventListener("submit", (e) => {
    let error = false;
    e.preventDefault();
    let user = document.querySelector("#input-mail");
    let emailCheck = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let pass = document.querySelector("#input-pass");
    let add = document.querySelector("#input-add");
    let city = document.querySelector("#input-city");
    let zip = document.querySelector("#input-zip");

    // Check mail
    if (user.value.trim() === "") {
        document.querySelector("#err-mail").innerHTML = "<em>Cannot be empty</em>";
        user.classList.add("err-box");
        error = true;
    } else if (emailCheck.test(user.value)) {
        document.querySelector("#err-mail").innerHTML = "";
        user.classList.remove("err-box");
    } else {
        document.querySelector("#err-mail").innerHTML = "<em>Wrong Email</em>";
        user.classList.add("err-box");
        error = true;
    }

    // Check password
    const length = document.querySelector("#length");
    const letter = document.querySelector("#letter");
    const capital = document.querySelector("#capital");
    const number = document.querySelector("#number");
    const special = document.querySelector("#special");

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const specialCharacters = /[^a-zA-Z0-9]/g;

    if (pass.value.trim().length === 0) {
        document.querySelector("#err-pass").innerHTML = "<em>Cannot be empty</em>";
        pass.classList.add("err-box");
        error = true;
    } else {
        document.querySelector("#err-pass").innerHTML = "";
        pass.classList.remove("err-box");
    }

    if (pass.value.length <= 50 && pass.value.length >= 18) {
        length.classList.remove("err-text");
        pass.classList.remove("err-box");
    } else {
        length.classList.add("err-text");
        error = true;
    }

    if (pass.value.match(lowerCaseLetters)) {
        letter.classList.remove("err-text");
    } else {
        letter.classList.add("err-text");
        error = true;
    }

    if (pass.value.match(upperCaseLetters)) {
        capital.classList.remove("err-text");
    } else {
        capital.classList.add("err-text");
        error = true;
    }

    if (pass.value.match(specialCharacters)) {
        special.classList.remove("err-text");
    } else {
        special.classList.add("err-text");
        error = true;
    }

    if (pass.value.match(/\d/)) {
        number.classList.remove("err-text");
    } else {
        number.classList.add("err-text");
        error = true;
    }

    // Check address
    if (add.value.trim().length === 0) {
        document.querySelector("#err-add").innerHTML = "<em>Please input address</em>";
        add.classList.add("err-box");
        error = true;
    } else {
        document.querySelector("#err-add").innerHTML = "";
        add.classList.remove("err-box");
    }

    // Check city
    if (city.value.trim().length === 0) {
        document.querySelector("#err-city").innerHTML = "<em>Please input city</em>";
        city.classList.add("err-box");
        error = true;
    } else {
        document.querySelector("#err-city").innerHTML = "";
        city.classList.remove("err-box");
    }

    // Check zipcode
    if (zip.value.trim().length === 0) {
        document.querySelector("#err-zip").innerHTML = "<em>Please input zipcode</em>";
        zip.classList.add("err-box");
        error = true;
    } else {
        document.querySelector("#err-zip").innerHTML = "";
        zip.classList.remove("err-box");
    }

    // Check checkbox
    const checkBox = document.querySelector("#check");
    const checkErr = document.querySelector("#err-check");
    if (!checkBox.checked) {
        checkErr.innerHTML = "<em>Please choose check box</em>";
        error = true;
    } else {
        checkErr.innerHTML = "";
    }

    // Trigger alert if there are no errors
    if (!error) {
        alert("Sign in successful!");
    }
});
