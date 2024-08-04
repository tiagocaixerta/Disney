document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    // Função para ocultar elementos do header
    function ocultaElementosDoHeader() {
        // Implementar a lógica para ocultar elementos do header
    }

    // Função para exibir elementos do header
    function exibeElementosDoHeader() {
        // Implementar a lógica para exibir elementos do header
    }

    // Evento de rolagem para mostrar ou ocultar elementos do header
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });

    // Adiciona eventos de clique para os botões de aba
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            aba.classList.add('shows_list--is-active');
            removeBotaoAtivo();
            event.target.classList.add('shows_tabs_button_active');
        });
    }

    // Remove a classe ativa de todos os botões de aba
    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]'); 
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('shows_tabs_button_active');
        }
    }

    // Esconde todas as abas
    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows_list--is-active');
        }
    }
});
