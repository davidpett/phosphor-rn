import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAmazonLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 168v32a6 6 0 0 1-12 0v-17.52l-5.66 5.66C225.6 191.15 188.86 230 128 230c-62 0-98.92-40.27-100.46-42a6 6 0 1 1 8.92-8c.34.37 35.09 38 91.54 38s91.2-37.64 91.55-38l.21-.22 5.76-5.76H208a6 6 0 0 1 0-12h32a6 6 0 0 1 6 5.98Zm-84-68.44V84a38 38 0 0 0-71.86-17.27 6 6 0 1 1-10.68-5.46A50 50 0 0 1 174 84v92a6 6 0 0 1-12 0v-11.56a50 50 0 1 1 0-64.88Zm0 32.44a38 38 0 1 0-38 38 38 38 0 0 0 38-38Z" />
  </Svg>
);
const Memo = memo(SvgAmazonLogoLight);
export default Memo;
