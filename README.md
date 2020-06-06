# Multiple entry points setup for Vue.js

This repository implements a simple multiple entry points setup for Vue.js application, heavily inspired by the solution for Create React App application introduced in [this blog post on LogRocket](https://blog.logrocket.com/multiple-entry-points-in-create-react-app-without-ejecting/). Please read the blog post for a detailed explanation for this setup as well as the original motivation.

The key advantage of using multiple entry points is that this setup makes it trivial to share components between multiple Vue applications. No need for creating a separate component library package or setting up a sophisticated monorepo soultion.

One minor improvement over the original CRA solution is to include a default build target (i.e. `/src/App.vue`), so that the build process can succeed without explicitly specifying the target in `.env`.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
