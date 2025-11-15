describe('Teste Login', () =>{
    it('passes', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')

        cy.contains('a', 'Fazer login').click()
        cy.get('[data-test="input-loginEmail"]').type('ana_02@email.com')
        cy.get('[data-test="input-loginPassword"]').type('Senha9874')
        cy.get('[data-test="submit-button"]').click()

        cy.wait(1000)
        cy.url().should('include', '/home')

    })
})



// Mini Documentação:

// cy.visit - Visita uma URL

//  cy.contains - Verifica se um elemento contém o texto especificado.

// .click() - Simula um click de um usuário em um botão.

//  cy.get - Seleciona um elemento HTML (como botão, campo e etc).

// .type - Digita um texto em um campo de

//  cy.url() - Navega até a URL.

// cy.wait(1000) - Adiciona um tempo de espera de 1000 milisegundos 

// .should() - Basicamente verifica se tem a mensagem na página.