let input = document.getElementById("input");
let btn = document.getElementById("btn");

function inputSecretOrvisible() {
    btn.addEventListener('click', function () {
        if (input.type == "password" && btn.className == "fas fa-eye") {
            input.type = "text"
            btn.className = "fas fa-eye-slash "
        } else {
            input.type = "password"
            btn.className = "fas fa-eye"
        }
    });
};
