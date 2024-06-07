
# Praticando React com Type Script e Next
## WebJornal Por Assinatura
Esse projeto foi realizado seguindo o curso do Ignite Lab React da Rocketseat.\
Esse projeto tem como objetivo conhecer o framework `Next`.
A fim de conhecimento também, está sendo utilizado `SASS` para estilização da aplicação.

## Ferramentas Utilizadas
`Stripe`
Responsável pelo processo de pagamentos online pelo usuário, possibilitando formas de pagamento de maneira segura e eficiente.

`FaunaDB`
Banco de dados distribuído para aplicações **ServerLess**, por não precisar manter uma conexão ativa com um banco de dados para realizar as operações, uma ótima opção para a aplicação em questão. Conexão realizada através de Next Auth.

`Prismic CMS`
Sistema para gerenciamento de conteúdo para a questão de disponibilização dos posts oferecidos pela aplicação ao usuário.

## Autenticação
Autenticação realizada através do GitHub, utilizando conceitos de `API Routes` no Next e `Next-Auth` para realizar essa integração.


# Configurações
### `FaunaDb`
Cadastre-se no FaunaDB, e usando o dashboard V4 deles, crie `Collections` => users e subscriptions e `Indexes` => `user_by_email`,`user_by_stripe_customer_id` com respectivos `Terms` => `data.email`,`data.stripe_customer_id`
### `Stripe`
Cadastre-se no Stripe, cadastre um produto de valor 9.90, que seria a assinatura do **News** e resgate as chaves de Api.
### `stripe webhooks`
Para que o stripe retorne informações sobre o pagamento para nossa aplicação, é necessário realizar uma conexão por webhooks, e para isso, é necessário uma configuração.\
Recomendo instalação do `scoop`, para auxiliar na instalação da `stripe CLI` => https://scoop.sh/
Após isso siga o passo a passo da instalação da CLI no site a seguir, na aba de instalação com `scoop` => https://docs.stripe.com/stripe-cli.\
Após fazer login na Stripe CLI:\
`Execute` => stripe listen --forward-to localhost:3000/api/webhooks\
Assim você receberá um WebHook Secret para usar na variável ambiente STRIPE_WEBHOOK_SECRET.\
`A conexão através de webhooks precisa estar ativa para que a aplicação funcione devidamente.`


### `yarn install`
Após fazer download da aplicação.\
Para baixar todas as dependências necessárias do projeto para que seja possível iniciar a aplicação.

### `yarn dev`
Rode esse comando para iniciar a aplicação.\
Que pode ser acessada => [http://localhost:3000](http://localhost:3000) no seu browser.

## Variáveis Ambiente
Para essa Aplicação funcionar você precisará de: \
`STRIPE_API_KEY` => Adiquirida ao realizar cadastro no Stripe, ir até a aba **Desenvolvedores** e depois **Chaves de API** e utilizar a sua **Chave Secreta**.\
`GITHUB_CLIENT_ID` e `GITHUB_CLIENT_SECRET` => Ambas informações podem ser adquiridas no site do GitHub, em **Settings**, **Developer Settings** e **OAuth Apps** aonde você deve criar um novo para essa aplicação e retirar essas informações de lá.\
`STRIPE_SUCESS_URL` => Sua **URL** para caso o pagamento através do Stripe tenha sido um **sucesso**.\
`STRIPE_CANCEL_URL` => Sua **URL** para caso o pagamento através do Stripe tenha sido **cancelado** ou tenha tido algum erro.\
`FAUNADB_KEY` => Seria a sua **Database Key** do banco de dados Fauna DB. Podendo acessar no seu database na opção **security** acessando através do **DashBoard V4**.\
`NEXT_PUBLIC_STRIPE_PUBLIC_KEY` => **Chave pública** do stripe, adquirida no mesmo lugar da secreta, e nome da variável deve ser dessa maneira por exigência do Next.  

`STRIPE_WEBHOOK_SECRET` => O código secreto da sua conexão webhook com o Stripe.
