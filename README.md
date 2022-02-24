# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project, install dependencies with 

```bash
npm install 

```
or 

```bash

pnpm install 
```
or

```bash
yarn start

```
Next Change the port in your package.json file so that your svelteapp will be running on to port 9000 as follows:

![post test config](https://user-images.githubusercontent.com/58561779/155517245-5e4dc3b8-b52d-4d96-ad4b-15158e7fe822.png)


and save your changes

Next start a development server using:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
> Note: You need to setup your resolve framework as well

# Setting Up Resolve

To understand how to use the resolve framework more better go to [resolve framework site](https://reimagined.github.io/resolve/)

To setup your resolve app locally make sure you have npx, nvm, npm installed which you probably already have installed because you would have had to use it in setting up the sveltekit as well. To install the framework use:
```bash
npx create-resolve-app my-resolve-backend

```
First Change Your Event Types at /common/event-types.js:
![event types](https://user-images.githubusercontent.com/58561779/155514338-9dbfe128-1435-450e-b55c-a5e44705cf0d.png)


Next change the list of Commands as follows at coommon/aggregates/my-aggregate.commands.js

![commands1](https://user-images.githubusercontent.com/58561779/155503527-a6aba45f-6722-4374-a5cb-638f45a20446.png)
![commands2](https://user-images.githubusercontent.com/58561779/155503570-3f368f44-75d6-420d-ab3b-6b9a3c4ec234.png)

Next Change you Projection at /common/aggregates/my-aggregate.projection.js

![projection list](https://user-images.githubusercontent.com/58561779/155514645-1b7525b7-ffa9-43b1-b306-f318c7a42e0e.png)


Next To register your Aggregates and Your viewModel go to your /config.app.js and let it look like this:

![app config](https://user-images.githubusercontent.com/58561779/155514988-f862b0ca-e028-4d7f-bbfb-9c3cadaf11b2.png)

Once all the changes are done start your server by running

```bash

npm run dev

```

# Shortcut

If you can't or don't wanna do all that for the resolve backend then go to this other of my [repo](https://github.com/DandyJoshua14/shopping-list) and clone it then just locate the folder, run 
```bash 
npm install 
``` 
Then 
```bash

npm run dev

```
Happy Development :-)
