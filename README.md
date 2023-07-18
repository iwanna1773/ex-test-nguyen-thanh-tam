This is the boilerplate front-end project.

## Project setup

- Nodejs version: v16.14.0
- NPM version: v8.3.0
- Yarn version: v1.22.18

yarn install

### Libraries

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Tools

- [VS Code settings](https://code.visualstudio.com/)

## Compiles and hot-reloads for development

yarn start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Compiles and minifies for building and deployment

Should update the .env.`<your-environment-name>` before running the command

yarn build

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)

## Folder structure

.
├── README.md
├── index.html
├── package.json
├── public
│   ├── favicon.ico
│   └── manifest.json
├── src
│   ├── Assets
│		│   ├── icon
│		│   └── img
│   ├── Components
│   ├── HOC
│   ├── pages
│   ├── App.tsx
│   └── main.tsx
├── tsconfig.json
└── yarn.lock

### Architecture

Source code is stored in src folder:
fonts, icons, images

- components: Global components
- pages: Contains screens application

Other files:

- main.tsx: Contains application configuration
- App.tsx: Contains route application