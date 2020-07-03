## Deploy

The deploy method is manual because the un-packed gsap bonus files can't live on GitHub and if Netlify handles the built it'll fail because it can't find the gsap bones files.

Instead deploying Storybook is now a manual process.

```sh
yarn deploy
```

Which will run `storybook:build` and then `netlify deploy --prod`

#### TODO

Might want to also add that deploy script to the `release` script to ensure the Storybook build is always correct for the version on `npm`

## Development

To develop react-svg-bubble-slider you'll need to have have signed up / paid for [Club Greensock](https://greensock.com/club/) membership.

Once you have the gsap-bonus.tgz file you'll need to un-pack it

```sh
tar -xzf gsap-bonus.tgz
```

Create a directory called `gsap-bonus` in the root of `react-svg-bubble-slider/` and copy over the following files:

`DrawSVGPlugin.js`
`InertiaPlugin.js`
`utils/VelocityTracker.js`

These are the only "Bonus" plugins we need. They will get bundled into the `main.js` when Webpack creates the npm package

Or using git a submodule you should be able to add the bonus files from the private remote git repo

```sh
git clone --recursive https://github.com/PaulieScanlon/gsap-bonus
```

Next i think you'll need to initialize the submodule: more on that [here](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

```sh
git submodule init
```
