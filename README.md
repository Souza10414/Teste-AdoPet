# 🧪 Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados desenvolvida com **Cypress**, cobrindo cenários essenciais da aplicação, incluindo **cadastro**, **login**, **falha de login** e **testes de API REST**.

Os testes foram estruturados seguindo boas práticas, com organização clara das pastas e geração automática de relatórios e vídeos.

---

## 🚀 Tecnologias Utilizadas

- **Cypress** — Testes E2E e API  
- **Mochawesome** — Relatórios completos em HTML e JSON  
- **Node.js**  
- **JavaScript**

---

## ▶️ Como Executar o Projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Abrir o Cypress no modo interativo

```bash
npx cypress open
```

### 3️⃣ Executar todos os testes no modo headless com Mochawesome

```bash
npx cypress run --reporter mochawesome
```

Os relatórios serão gerados automaticamente na pasta:

```
cypress/results
```

---

## 📊 Relatórios com Mochawesome

O **Mochawesome** fornece relatórios detalhados contendo:

- Quantidade de testes executados  
- Tests passando, falhando e pendentes  
- Logs detalhados  
- Prints + vídeos (quando habilitado)

Você pode abrir o arquivo `.html` dentro da pasta `results` para visualizar o relatório completo.

---

## 🎥 Vídeos da Execução

Todas as execuções feitas via `cypress run` geram vídeos automáticos:

```
cypress/videos/
```

Esses vídeos ajudam a visualizar o fluxo do teste e identificar comportamentos inesperados na aplicação.

---

## 📌 Cenários Testados

### ✔ Cadastro de novo usuário  
- Preenchimento de todos os campos  
- Envio do formulário  
- Validação da navegação ou mensagem de sucesso  

### ✔ Login com sucesso  
- Usuário e senha válidos  
- Verificação da URL após login  

### ✔ Login com falha  
- Credenciais inválidas  
- Mensagem de erro exibida corretamente  

### ✔ API REST  
- Requisições GET/POST/PUT/DELETE  
- Validação dos contratos  
- Verificação dos códigos de status  

---

## 📁 Dependências principais

```json
{
  "dependencies": {
    "cypress": "^12.0.0",
    "mochawesome": "^7.1.3"
  }
}
```

---

## 🙌 Contribuições

Sinta-se à vontade para abrir *issues* e enviar *pull requests*.  
Feedbacks e melhorias são sempre bem-vindos!
