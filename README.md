# Glossário

- [Dependências](#dependências)
- [Instalação de dependências](#instalação-de-dependências)
- [Executando o projeto](#executando-o-projeto)
- [Formatando o código](#formatando-o-código)

# Dependências:

- [React 18](https://react.dev/)
- [yup](https://github.com/jquense/yup)
- [axios](https://axios-http.com/docs/intro)
- [tailwind](https://tailwindcss.com/)
- [material-tailwind](https://material-tailwind.com/)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-icons](https://react-icons.github.io/react-icons/)
- [js-cookies](https://www.npmjs.com/package/js-cookie)
- [chart.js](https://www.chartjs.org/)
- [date-fns](https://date-fns.org/)
- [react-day-picker](https://react-day-picker.js.org/)
- [react-hook-forms](https://react-hook-form.com/)
- [react-promise-tracker](https://www.npmjs.com/package/react-promise-tracker)

### Dependências de desenvolvimento:

- [prettier](prettier)
- [@trivago/prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)

# Instalação de dependências

Caso você opte por usar o docker, pode pular essa parte. Do contrário, para instalar as dependências, basta rodar o seguinte comando no mesmo diretório em que o `package.json` se encontra:

```bash
C:\projects\links> npm i --legacy-peer-deps
```

# Adicionando variáveis de ambiente

Você deverá criar um arquivo .env como o valor das variáveis necessárias para a execução da aplicação. Na raiz do projeto existe um `.env.example`, deve-se criar um arquivo identico, com porém com o nome `.env`, seus valores preenchidos. Exemplo:

.env.example:
```
VITE_API_URL=
```
.env:
```
VITE_API_URL=http://{URL_DA_MINHA_API}
```

# Executando o projeto

### Docker

Para executar o projeto via-docker, basta executar os seguintes comandos:

```bash
C:\projects\links> docker network create mynetwork
```

_Para criar uma network para permitir a comunicação entre containers_

```bash
C:\projects\links> docker-compose up -d
```

_Para iniciar a aplicação_

_O mesmo irá instalar as dependências e rodar a aplicação._

### Via npm-cli

Para executar o projeto, sem usar o docker, basta executar o seguinte comando:

```bash
C:\projects\links> npm run dev
```

_Só poderá ser feito caso já tenha feito a instalação dos pacotes._

# Formatando o código

O projeto está com um arquivo `.prettierrc.json` para lidar com a formatação de código, foi adicionado o plugin @trivago/prettier-plugin-sort-imports para ordenar os imports da aplicação. A ordem dos imports é definida via expressão regular em `improtOrder`.

Para executar a formatação do código, basta executar o seguinte comando no terminal:

```bash
C:\projects\links> npm run dev
```
