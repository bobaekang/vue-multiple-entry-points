# Multiple entry points setup for Vue.js

> This repository is _heavily_ inspired by [this blog post on LogRocket](https://blog.logrocket.com/multiple-entry-points-in-create-react-app-without-ejecting/), which introduces the multiple entry points solution for Create React App application. Please read the blog post for a detailed explanation for this setup as well as the original motivation.

Showcasing a simple multiple entry points setup for Vue.js application. ✌️

This setup allows you to build multiple Vue applications sharing components from a single repository. Switching build targets is controlled by the `VUE_APP_BUILD_TARGET` environment variable. Check out `/src/main.js` to see how this is done!

The key advantage of using multiple entry points is that this setup makes it trivial to share components between multiple Vue applications. No need for creating a separate component library package or setting up a sophisticated monorepo soultion.

One minor improvement over the original CRA solution is to simplify the logic for matching build target name with its path by replacing an array of objects to a single object; another minor improvement is to include a default build target (i.e. `/src/App.vue`), so that the build process can succeed without explicitly specifying the target in `.env`.

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
