Built on `Handcrafted` using the `handcrafted starter kit` blank template.

## Handcrafted
Handcrafted gets out of your way, literally, and allows you to model your `src/` environment anyway you like. Templates default to separate `.tpl.html` files for the views and `.skl.html` for the skeleton ui (the ui to be loaded before the async content has loaded).

You can literally simulate a `React` like templating workflow and run everything from js, you can even simulate a `Next.js` routing folder structure, and it'll work just fine. You can even go as far as modelling a `.NET` workflow.

The goal of Handcrafted is to allows developers with previous experience in other frameworks to bring the best of what they were used to without having to relearn an entire workflow while benefiting from the complexities and power of modern JavaScript.

**Contents of this starter kit**
1. Handcrafted Engine (HCE)
2. Google PWA Specs
3. Netlify Ready Site
4. Pre-configured Webpack Environment(s)

### Learning curve
- Handcrafted is built on JavaScript so that's all you need to know... so keep up with the EcmaScript family if you can.
- The templating is currently done via the `Handlebars` compiler with we'll be switching to the `Svelte` compiler in early 2022... and yes, 99% backward compatibility is definitely in my mind
- Your entire workflow is handled by `Webpack` but we'll soon be tapping into `Node.js` directly for more power.

## Working with code

### Development
Run `npm run start:dev` to start the development server. Webpack is set up to automatically watch your both your css and js files.

### Deployment
- Deploy your code via `npm run deploy` which compiles to the `dist` folder. Set your server to serve files from here.
- The deployed site can run on any environment since it's built on the `JAM Stack`. No special servers needed.