import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPerspectiveFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 120H32V77.09a16 16 0 0 1 13.14-15.74l160-29.09A16 16 0 0 1 224 48ZM32 178.91a16 16 0 0 0 13.14 15.74l160 29.09a16.47 16.47 0 0 0 2.86.26 16 16 0 0 0 16-16v-72H32ZM240 120h-16v16h16a8 8 0 0 0 0-16Zm-224 0a8 8 0 0 0 0 16h16v-16Z" />
  </Svg>
);
const Memo = memo(SvgPerspectiveFill);
export default Memo;
