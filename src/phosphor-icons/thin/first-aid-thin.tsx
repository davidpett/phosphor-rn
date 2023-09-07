import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFirstAidThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 92h-52V40a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v52H40a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h52v52a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-52h52a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12Zm4 60a4 4 0 0 1-4 4h-56a4 4 0 0 0-4 4v56a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-56a4 4 0 0 0-4-4H40a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h56a4 4 0 0 0 4-4V40a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFirstAidThin);
export default Memo;
