<a  href="https://react-svg-bubble-slider.netlify.app/" target="_blank">
<img src="https://react-svg-bubble-slider.netlify.app/react-svg-bubble-slider-og-image.jpg" alt="React Svg Buobble Slider" />
</a>

<br />
<br />

[![circle-ci](https://circleci.com/gh/PaulieScanlon/react-svg-bubble-slider.svg?style=shield)](https://app.circleci.com/pipelines/github/PaulieScanlon)

[![npm](https://img.shields.io/npm/dw/react-svg-bubble-slider)](https://img.shields.io/npm/dw/react-svg-bubble-slider)

[![npm](https://img.shields.io/npm/v/react-svg-bubble-slider)](https://img.shields.io/npm/v/react-svg-bubble-slider)

[![github-stars](https://img.shields.io/github/stars/pauliescanlon/react-svg-bubble-slider?style=social)](https://img.shields.io/github/stars/pauliescanlon/react-svg-bubble-slider?style=social)

# SvgBubbleSlider

SvgBubbleSlider is fun way to add reactions to your blog posts 😃 😠 😥 and comes equipped with 14 built in reactions, but you don't have to use them all, see the <a target="_blank" href='https://react-svg-bubble-slider.netlify.app//?path=/docs/svgbubbleslider--icons'>icons prop</a> to modify the icons list.

You can access the current <a target="_blank" href='https://react-svg-bubble-slider.netlify.app//?path=/docs/svgbubbleslider--reaction'>reaction</a> via a render prop and use it to post to your back-end of choice.

Click, drag or use your keyboard arrows to explore all the reactions.

## demo 👇

[react-svg-bubble-slider.netlify.app](https://react-svg-bubble-slider.netlify.app/?path=/docs/intro--page)

### Getting Started 🚀

You can install SvgBubbleSlider as a node module via `npm` or `yarn`

```sh
npm install react-svg-bubble-slider
```

### Usage 🧰

To use SvgBubbleSlider import it and add it to your React component's render method

```javascript
// some-component.js/.tsx
import React from 'react';

import { SvgBubbleSlider } from 'react-svg-bubble-slider';

const SomeComponent = () => {
  return (
    <div>
      ...
      <SvgBubbleSlider>
        {({ reaction }) => reaction && <button>{reaction}</button>}
      </SvgBubbleSlider>
    </div>
  );
};

export default SomeComponent;
```

If you're using **react-svg-bubble-slider** in your project i'd love to hear from you [@pauliescanlon](https://twitter.com/PaulieScanlon)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5P31B7G8)

### Thanks 🙏

Thanks have to go to Chris Gannon for creating the original [SVG Bubble Slider](https://codepen.io/chrisgannon/pen/GZNgLw/)

### Licence ⚖️

GSAP and all GreenSock files are subject to the standard GreenSock license which can be found at [https://greensock.com/standard-license](https://greensock.com/standard-license)
