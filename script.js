
const form = document.getElementById("retirement-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's information
    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Retirement conditions
    const canRetire =
        (gender === "mujer" && age >= 60) ||
        (gender === "hombre" && age >= 65);

    const result = document.getElementById("result");
    const icon = document.getElementById("result-icon");
    const title = document.getElementById("result-title");
    const message = document.getElementById("result-message");

    // THE ONLY IF
    if (canRetire) {
        result.className = "result success";
        icon.textContent = "✓";
        title.textContent = "Congratulations, " + name + "!";
        message.textContent = "You have reached the retirement age in Argentina.";
    } else {
        const retirementAge = gender === "mujer" ? 60 : 65;
        const yearsLeft = retirementAge - age;

        result.className = "result warning";
        icon.textContent = "◷";
        title.textContent = "Not yet, " + name + "!";
        message.textContent = "You need " + yearsLeft + " more year(s) to reach retirement age.";
    }

    result.classList.remove("hidden");
});
