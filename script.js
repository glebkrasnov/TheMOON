const PASSWORD = "2589"; // ← здесь свой пароль

const authScreen = document.getElementById("auth-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const errorText = document.getElementById("auth-error");

function checkPassword() {
    const input = document.getElementById("passwordInput").value;

    if (input !== PASSWORD) {
        errorText.textContent = "Неправильный пароль";
        return;
    }

    errorText.textContent = "";
    authScreen.classList.add("hidden");
    welcomeScreen.classList.remove("hidden");

    setTimeout(() => {
        window.location.href = "https://yandex.ru/pogoda/ru/nizhny-novgorod?lat=56.202014&lon=43.810565";
    }, 2500);
}
