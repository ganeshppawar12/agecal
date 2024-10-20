function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    if (birthdate === "") {
        document.getElementById("result").innerHTML = "Please select a date.";
        return;
    }

    const birthDateObj = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("result").innerHTML = "You are " + age + " years old.";
}