# GITHUB ORGANIZATIONS PAGE

This project allows you to search organizations in Github :octocat: by using the Github GraphQL API. It shows organization information such a description, logo, web, repositories, etc...

## Installation
1. You need to create a `.env` file with `GITHUB_TOKEN` variable. You can get this token by following this steps [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). You should mark `repo` and `admin:org` for make it work properly
2. Run `yarn install` so that to install all the dependencies needed
3. Run `yarn start` so that to run the project in development mode
4. Run `yarn build` to create a production build

## Technologies used
- [react](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Apollo](https://www.apollographql.com/)
- [typescript](https://www.typescriptlang.org/)
- [webpack](https://webpack.js.org/)
- [jest](https://jestjs.io/)
- [@testing-library/react](https://github.com/testing-library/react-testing-library)
