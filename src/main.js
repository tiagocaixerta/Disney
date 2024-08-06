document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    function ocultaElementosDoHeader() {
        const header = document.querySelector('.header');
        header.classList.add('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('.header');
        header.classList.remove('header--is-hidden');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            aba.classList.add('shows_list--is-active');
            removeBotaoAtivo();
            event.target.classList.add('shows_tabs_button_active');
        });
    });

    questions.forEach(question => {
        question.addEventListener('click', function() {
            abreOuFechaResposta(this.parentElement);
        });
    });

    function abreOuFechaResposta(elemento) {
        const classe = 'faq__questions__item--is-open';
        const answer = elemento.querySelector('.faq__questions__item__answer');

        if (elemento.classList.contains(classe)) {
            elemento.classList.remove(classe);
            answer.style.height = '0';
        } else {
            elemento.classList.add(classe);
            answer.style.height = `${answer.scrollHeight}px`;
        }
    }

    function removeBotaoAtivo() {
        buttons.forEach(button => {
            button.classList.remove('shows_tabs_button_active');
        });
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        tabsContainer.forEach(tab => {
            tab.classList.remove('shows_list--is-active');
        });
    }

  
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('.header');
        const threshold = 50; // Altura do rolar para ocultar o cabeçalho

        window.addEventListener('scroll', function() {
            if (window.scrollY > threshold) {
                header.classList.add('header--is-hidden');
            } else {
                header.classList.remove('header--is-hidden');
            }
        });
    });


});
