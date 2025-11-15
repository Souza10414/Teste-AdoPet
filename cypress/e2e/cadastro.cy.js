describe('Cadastro', () => {
    it('passes', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        
        cy.contains('a', 'Cadastrar').click();
        cy.get('input[name="nome"]').type('Ana de Jesus');
        cy.get('input[name="email"]').type('ana_02@email.com');
        cy.get('input[name="password"]').type('Senha9874');
        cy.get('input[name="confirm_password"]').type('Senha9874');
        cy.get('[data-test="submit-button"]').click();

     })
})


// Mini Documentação:

// cy.visit - Visita uma URL

//  cy.contains - Verifica se um elemento contém o texto especificado.

// .click() - Simula um click de um usuário em um botão.

//  cy.get - Seleciona um elemento HTML (como botão, campo e etc).

// .type - Digita um texto em um campo de


