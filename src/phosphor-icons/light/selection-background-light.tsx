import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionBackgroundLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 82H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2ZM138 40a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12h-16a6 6 0 0 1-6-6Zm84 8v8a6 6 0 0 1-12 0v-8a2 2 0 0 0-2-2h-8a6 6 0 0 1 0-12h8a14 14 0 0 1 14 14Zm0 48v16a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0Zm0 56v8a14 14 0 0 1-14 14h-8a6 6 0 0 1 0-12h8a2 2 0 0 0 2-2v-8a6 6 0 0 1 12 0ZM82 56v-8a14 14 0 0 1 14-14h8a6 6 0 0 1 0 12h-8a2 2 0 0 0-2 2v8a6 6 0 0 1-12 0Z" />
  </Svg>
);
const Memo = memo(SvgSelectionBackgroundLight);
export default Memo;
