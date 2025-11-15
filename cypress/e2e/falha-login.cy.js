describe('Teste falha login', () => {
    it('passes', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');

        cy.get('input[name="email"]').type('ana_02@email.com');
        cy.get('input[name="password"]').type('Senha9875');
        cy.get('[data-test="submit-button"]').click();

        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    })
})


// Mini Documentação:

// cy.visit - Visita uma URL

// .click() - Simula um click de um usuário em um botão.

//  cy.get - Seleciona um elemento HTML (como botão, campo e etc).

// .type - Digita um texto em um campo de

//  cy.url() - Navega até a URL.

// .should() - Basicamente verifica se tem a mensagem na página.

// be.visible - Garante que o link está visivel na tela.