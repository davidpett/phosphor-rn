import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204.4 51.6a108 108 0 1 0 0 152.8 108.16 108.16 0 0 0 0-152.8Zm-17 135.82a84 84 0 1 1 0-118.84 84.12 84.12 0 0 1 .02 118.84ZM168.5 79.49a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 103l23.53-23.53a12 12 0 0 1 16.97.02Zm0 56a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 1 1 17-17L128 159l23.53-23.52a12 12 0 0 1 16.97.04Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleDownBold);
export default Memo;
