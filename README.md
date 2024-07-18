# Portfolio Website React
![Badge em Desenvolvimento](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)

Este é um projeto de portfólio pessoal construído usando React e styled-components. O projeto exibe diferentes seções, como Sobre Mim, Projetos e Contato. Inclui recursos como temas dinâmicos, design responsivo e manuseio de formulários com integração de e-mail. O portfólio também incorpora padrões de design e testes para garantir um código mantível e robusto.


## Stack utilizada

- Node.js v18.17.0
- React v18.3.1
- Styled-components v6.1.11
- Nodemailer v6.9.0
- Express v4.17.1
- Storybook v8.0.9


## Funcionalidades

- Serviço de E-mail: Integração com um serviço de e-mail para envio de notificações e comunicação com os usuários.
- Serviço de WhatsApp: Integração com a API do WhatsApp para envio de mensagens e notificações.
 

## Padrões de Projetos

- Componentização: Cada parte da interface é dividida em componentes reutilizáveis.
- Styled Components: Utilização de Object Lookup Table para organizar o CSS, facilitando a manutenção e a escalabilidade do código.
- Testes Unitários: Testes são escritos para garantir que cada componente funcione corretamente
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`REACT_APP_WHATSAPP_PHONE_NUMBER`

`REACT_APP_ACCOUNT_NAME`

`REACT_APP_CHAT_MESSAGE`


## Rodando localmente

Clone o projeto

```bash
  https://github.com/jordanogiacomet/portfolio-styled-components
```

Entre no diretório do projeto

```bash
  cd portfolio-styled-components
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

O servidor de desenvolvimento será iniciado e a aplicação estará disponível em `http://localhost:3000`.

## Rodando com Docker

Certifique-se de que o Docker está instalado e rodando no seu sistema.

### Passos

- Execute o seguinte comando para construir a imagem Docker:

```bash
  docker-compose build
```

- Execute o seguinte comando para iniciar o contêiner:

```bash
  docker-compose build
```

A aplicação React agora deve estar rodando em um contêiner Docker e acessível em `http://localhost:3000`.
## Storybook
Para visualizar a documentação dos componentes com o Storybook, execute:

```bash
  npm run storybook
```
O servidor de desenvolvimento será iniciado e a aplicação estará disponível em `http://localhost:6006`.


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Apêndice

A aplicação React depende do serviço de email acessível em: https://github.com/jordanogiacomet/email-api


## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Roadmap

- Melhorar o suporte de navegadores
- Minificar o Javascript
- Adicionar mudança de idioma
- Implementar a funcionalidade de mudar entre modo claro e modo escuro
- Implementar um CMS no lado do servidor

