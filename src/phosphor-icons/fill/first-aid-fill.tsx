import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFirstAidFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 104v48a16 16 0 0 1-16 16h-48v48a16 16 0 0 1-16 16h-48a16 16 0 0 1-16-16v-48H40a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16h48V40a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v48h48a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgFirstAidFill);
export default Memo;
