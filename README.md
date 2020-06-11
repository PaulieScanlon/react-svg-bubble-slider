<a href="https://react-svg-bubble-slider.netlify.app/" target="_blank">
<img src="https://react-svg-bubble-slider.netlify.app/react-svg-bubble-slider-og-image.jpg" alt="React Svg Buobble Slider" />
</a>

# SvgBubbleSlider

SvgBubbleSlider is fun way to add reactions to your blog posts. 😃 😠 😥

SvgBubbleSlider comes equipped with 13 reactions. You can access the current via a render prop and use it to post to your back-end of choice.

Click or drag around to explore all the reactions

## demo 👀

https://react-svg-bubble-slider.netlify.app/

### Getting Started 🚀

You can install SvgBubbleSlider as a node module via `npm` or `yarn`

```sh
npm install react-svg-bubble-slider
```

### Usage 🧰

To use SvgBubbleSlider import it and add it to your React component's render method

```javascript
// some-component.js/.tsx
import React from "react";

import { SvgBubbleSlider } from "react-svg-bubble-slider";

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

### Thanks 🙏

Thanks have to go to Chris Gannon for creating the original [SVG Bubble Slider](https://codepen.io/chrisgannon/pen/GZNgLw/)

### Licence ⚖️

GSAP and all GreenSock files are subject to the standard GreenSock license which can be found at [https://greensock.com/standard-license](https://greensock.com/standard-license)
