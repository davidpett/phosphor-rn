import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonSimpleBikeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 84a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-40a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm34 92a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18ZM54 136a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 60a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm134-68h-36a12 12 0 0 1-8.49-3.51L120 101l-15 15 31.52 31.51A12 12 0 0 1 140 156v48a12 12 0 0 1-24 0v-43l-36.49-36.51a12 12 0 0 1 0-17l32-32a12 12 0 0 1 17 0L157 104h31a12 12 0 0 1 0 24Z" />
  </Svg>
);
const Memo = memo(SvgPersonSimpleBikeBold);
export default Memo;
