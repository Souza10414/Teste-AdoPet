describe('Api Adopet', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzVlYzU1ZS05YzU4LTQ4Y2ItOWI0Ni01MDk5YWI1NDE2ZjEiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc2MzIzMjA3NiwiZXhwIjoxNzYzNDkxMjc2fQ.nHButa5iWuxl_aBSqvlO6jLln3pMVZtdavRYkNq_dCw'
 it('Mensagens da API', () => {
    cy.request({
        method: 'GET',
        url: 'https://adopet-api-i8qu.onrender.com/mensagem/675ec55e-9c58-48cb-9b46-5099ab5416f1',
        headers: { authorization }
        }).then((res) => {    
        expect(res.status).to.equal(200)
        expect(res.body).to.not.be.empty
        expect(res.body).to.have.property('msg')
        })


       
 })
})
