import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTray = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 16v104h-28.7a15.86 15.86 0 0 0-11.3 4.69L148.69 176h-41.38L88 156.69A15.86 15.86 0 0 0 76.69 152H48V48Zm0 160H48v-40h28.69L96 187.31a15.86 15.86 0 0 0 11.31 4.69h41.38a15.86 15.86 0 0 0 11.31-4.69L179.31 168H208v40Z" />
  </Svg>
);
const Memo = memo(SvgTray);
export default Memo;
