# Deploy

The deploy method is manual because the gsap-bonus.tgz can't live on GitHub and if Netlify handles the build it'll fail because it can't find gsap-bonus.tgz.

Instead deploying Storybook is now a manaul procoess.

```sh
yarn deploy
```

Which will run `storybook:build` and then `netlify deploy --prod`

Might want to also add that deploy script to the `release` script to ensure the Storybook build is always correct for the version on `npm`
