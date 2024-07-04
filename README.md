# React + TypeScript + Vite

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Features

- Typescript ^5.2.2
- MUI5 ^5.15.12
- React Router dom ^5.3.3
- Zustand ^4.5.2
- React Query ^5.28.4
- Husky ^9.0.11
- Commitizen ^3.3.0
- Commitlint ^19.0.3
- Lint-staged ^15.2.2
- Prettier ^3.2.5
- Eslint ^8.56.0
- Axios ^1.6.7
- SSL configuration to run the application over HTTPS

Start => 
        Router =>
                Init { GetCountry } =>
                                    Wrapper { Theme } => 
                                                        App => 
                                                                RouteWrapperIsp  => 
                                                                                CountryList => 
                                                                                                CountryCard => 
                                                                                                                CountryDetails

Sistema de rotas:
=> ispGetByRoute | verifica se aquela rota existe no sistema
=> RouteWrapperIsp | salva as informações do ispGetByRoute
=> WrapperRedirectPageIsp | recebe a rota e o contexto(Home, Login, etc...) {
    => useCurrentIsp | Verifica se a rota salva no sistema é válida, caso não seja redireciona para uma página NotFound
    => getComponent | Verifica se o Componente existe naquele contexto, caso não exista redireciona para a DefaultPage
}