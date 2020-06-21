import React from "react";

import { SvgBubbleSlider } from "react-svg-bubble-slider";

const IndexPage = () => {
  return (
    <div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus
        in sapien aliquam congue. Vestibulum suscipit efficitur justo, quis
        facilisis tortor molestie in. Aliquam commodo eros vel hendrerit
        imperdiet. Aenean fringilla pulvinar magna. Cras purus tellus, ornare
        vitae dignissim id, iaculis eu dolor. Ut nulla libero, condimentum non
        est a, feugiat ullamcorper lectus. Donec facilisis finibus massa a
        tincidunt. Nulla aliquet cursus turpis. Nunc facilisis vel nulla a
        varius. In cursus lectus at consectetur ullamcorper. Duis ac scelerisque
        risus, non tempor urna. Sed pulvinar malesuada arcu, sit amet dictum
        odio dictum at. Nullam sed sodales elit. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Sed volutpat sodales tellus sed cursus.
        Phasellus et maximus felis, sed scelerisque risus. Nam massa tellus,
        volutpat sit amet feugiat in, efficitur a ante. Nam lobortis ipsum
        ipsum, porta malesuada nibh lobortis commodo. Duis vehicula nibh eget
        nunc tristique consectetur. Sed euismod neque et ex facilisis laoreet.
        Integer molestie mauris nec erat blandit tristique. Vestibulum porta
        elit quis tincidunt condimentum. Vestibulum iaculis quam in vehicula
        vehicula. Quisque imperdiet lectus in placerat tempor. Curabitur varius,
        est quis consectetur venenatis, nulla dolor dictum urna, id eleifend
        augue arcu nec libero. Phasellus gravida ligula id urna varius tempus.
        Vivamus diam libero, efficitur eu metus sit amet, porta commodo elit.
        Nulla imperdiet diam eget sapien accumsan condimentum. Aenean diam
        libero, mattis ac lorem et, iaculis egestas arcu. Etiam sodales vitae
        nisi in gravida. Integer sit amet scelerisque sem. Ut sit amet dui
        ultrices diam molestie lobortis imperdiet sit amet urna. Integer
        tincidunt ut magna sed fringilla.
      </div>
      <div style={{ textAlign: "center" }}>
        <SvgBubbleSlider>
          {({ reaction }) => reaction && <button>{reaction}</button>}
        </SvgBubbleSlider>
      </div>
    </div>
  );
};

export default IndexPage;
