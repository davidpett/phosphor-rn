import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTShirtFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M247.59 61.22 195.83 33a8 8 0 0 0-3.83-1h-32a8 8 0 0 0-8 8 24 24 0 0 1-48 0 8 8 0 0 0-8-8H64a8 8 0 0 0-3.84 1L8.41 61.22a15.76 15.76 0 0 0-6.59 21.26l19.27 36.81A16.37 16.37 0 0 0 35.67 128H56v80a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-80h20.34a16.37 16.37 0 0 0 14.58-8.71l19.27-36.81a15.76 15.76 0 0 0-6.6-21.26ZM35.67 112a.62.62 0 0 1-.41-.13L16.09 75.26 56 53.48V112Zm185.07-.14a.55.55 0 0 1-.41.14H200V53.48l39.92 21.78Z" />
  </Svg>
);
const Memo = memo(SvgTShirtFill);
export default Memo;
