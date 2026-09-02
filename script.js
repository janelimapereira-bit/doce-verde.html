// ===============================
// MENU RESPONSIVO
// ===============================

const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {

    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        aberto
    );

    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});


// Fecha o menu quando o usuário seleciona uma opção

const linksMenu = menu.querySelectorAll("a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


// ===============================
// FORMULÁRIO
// ===============================

const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroMensagem = document.getElementById("erro-mensagem");

const mensagemStatus =
    document.getElementById("mensagem-status");


function validarNome() {

    if (nome.value.trim().length < 2) {

        erroNome.textContent =
            "Digite um nome fictício com pelo menos 2 caracteres.";

        return false;
    }

    erroNome.textContent = "";

    return true;
}


function validarEmail() {

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value.trim())) {

        erroEmail.textContent =
            "Digite um e-mail fictício válido.";

        return false;
    }

    erroEmail.textContent = "";

    return true;
}


function validarMensagem() {

    if (mensagem.value.trim().length < 10) {

        erroMensagem.textContent =
            "A mensagem precisa ter pelo menos 10 caracteres.";

        return false;
    }

    erroMensagem.textContent = "";

    return true;
}


// Validação enquanto o usuário preenche

nome.addEventListener("blur", validarNome);
email.addEventListener("blur", validarEmail);
mensagem.addEventListener("blur", validarMensagem);


// Envio

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nomeValido = validarNome();
    const emailValido = validarEmail();
    const mensagemValida = validarMensagem();

    if (!nomeValido || !emailValido || !mensagemValida) {

        mensagemStatus.textContent =
            "Revise os campos destacados.";

        return;
    }


    mensagemStatus.textContent =
        "Mensagem validada com sucesso! Este formulário é apenas demonstrativo.";

    formulario.reset();

});