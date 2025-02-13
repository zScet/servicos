function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});


        // Função para redirecionar para a página de Cadastro
        function irParaCadastro() {
            window.location.href = "cadastro.html"; // Substitua pelo URL da sua página de cadastro
        }

        // Função para redirecionar para a página de Login
        function irParaLogin() {
            window.location.href = "login.html"; // Substitua pelo URL da sua página de login
        }

        document.addEventListener('DOMContentLoaded', function () {
            const questions = document.querySelectorAll('.question h4');
            
            questions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;  // A resposta está logo abaixo do título (h4)
                    const icon = this.querySelector('.toggle-icon');
        
                    // Alterna a visibilidade da resposta
                    answer.classList.toggle('show');
                    
                    // Gira o ícone
                    icon.style.transform = answer.classList.contains('show') ? 'rotate(90deg)' : 'rotate(0deg)';
                });
            });
        });
        
