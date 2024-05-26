
# Praticando React com Type Script e Next
## WebJornal Por Assinatura
Esse projeto foi realizado seguindo o curso do Ignite Lab React da Rocketseat.\
Esse projeto tem como objetivo conhecer o framework `Next`.
A fim de conhecimento também, está sendo utilizado `SASS` para estilização da aplicação.

### Ferramentas Utilizadas
`Stripe`
Responsável pelo processo de pagamentos online pelo usuário, possibilitando formas de pagamento de maneira segura e eficiente.

`FaunaDB`
Banco de dados distribuído para aplicações **ServerLess**, uma ótima opção para a aplicação em questão.

`Prismic CMS`
Sistema para gerenciamento de conteúdo para a questão de disponibilização dos posts oferecidos pela aplicação ao usuário.

### Autenticação
Autenticação realizada através do GitHub, utilizando conceitos de `API Routes` no Next e `Next-Auth` para realizar essa integração.

<DESCONSIDERAR>Para **gerenciamento de estado global** foi utilizado `Context API` por ser uma aplicação menor e não necessitar de ferramentas como `Redux`.

Consumo de APIs do `Stripe` foram criadas utilizando a ideia de `Server Side Rendering(SSR)`. Static Site Generation(SSG)


### `yarn install`
Após fazer download da aplicação.\
Para baixar todas as dependências necessárias do projeto para que seja possível iniciar a aplicação.

### `yarn dev`
Rode esse comando para iniciar a aplicação.\
Que pode ser acessada => [http://localhost:3000](http://localhost:3000) no seu browser.

### Variáveis Ambiente
Para essa Aplicação funcionar você precisará de 
`STRIPE_API_KEY` => Adiquirida ao realizar cadastro no Stripe, ir até a aba **Desenvolvedores** e depois **Chaves de API** e utilizar a sua **Chave Secreta**.
`GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET` => Ambas informações podem ser adquiridas no site do GitHub, em **Settings**, **Developer Settings** e **OAuth Apps** aonde você deve criar um novo para essa aplicação e retirar essas informações de lá.
