import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBugBeetle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 144h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16.4a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 1 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32l19.5 19.49A79.76 79.76 0 0 0 48.4 96H32a8 8 0 0 0 0 16h16v16H32a8 8 0 0 0 0 16h16v8c0 2.7.14 5.37.4 8H32a8 8 0 0 0 0 16h19.68a80 80 0 0 0 152.64 0H224a8 8 0 0 0 0-16h-16.4c.26-2.63.4-5.3.4-8ZM128 40a64.07 64.07 0 0 1 63.48 56h-127A64.07 64.07 0 0 1 128 40Zm8 175.48V136a8 8 0 0 0-16 0v79.48A64.07 64.07 0 0 1 64 152v-40h128v40a64.07 64.07 0 0 1-56 63.48Z" />
  </Svg>
);
const Memo = memo(SvgBugBeetle);
export default Memo;
