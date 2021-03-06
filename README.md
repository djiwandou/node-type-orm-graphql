[![CircleCI](https://circleci.com/gh/developer239/node-type-orm-graphql.svg?style=svg)](https://circleci.com/gh/developer239/node-type-orm-graphql)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e6b658d5806762b959ca/test_coverage)](https://codeclimate.com/github/developer239/node-type-orm-graphql/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/e6b658d5806762b959ca/maintainability)](https://codeclimate.com/github/developer239/node-type-orm-graphql/maintainability)

# Node Type ORM GraphQL

Demo application [is running here](https://node-type-orm-graphql.herokuapp.com/graphql) (it might take a while before the free server wakes up)

📘 Frontend application is running [here](https://react-apollo-graphql.herokuapp.com). You can find the source code [here](https://github.com/developer239/react-apollo-graphql).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Development

System Dependencies:

1. `brew install node`
2. `brew install yarn`
3. `brew install make`
4. `brew install docker`
5. `brew install docker-compose`

Run docker database:

1. `make infra`
2. `make db-run-migration`

Run node server:

1. `make node_modules`
2. `make watch`

Now you can open [http://localhost:8080/graphql](http://localhost:8080/graphql) in your browser.

### Helpful Commands

- `make db-generate-migration name=migration_name` create database migration
- `make db-run-migration` apply database migration
- `make db-revert` revert last database migration
- `make db-reset` revert migration and apply it again
- `make test` run tests
- `make test-coverage` run tests and report coverage
- `make lint-ts` run eslint on typescript files
- `make prettier` format source code by prettier
