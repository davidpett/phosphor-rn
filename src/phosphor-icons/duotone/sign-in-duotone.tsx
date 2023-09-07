import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignInDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m136 128-40 40V88Z" opacity={0.2} />
    <Path d="m141.66 122.34-40-40A8 8 0 0 0 88 88v32H24a8 8 0 0 0 0 16h64v32a8 8 0 0 0 13.66 5.66l40-40a8 8 0 0 0 0-11.32ZM104 148.69v-41.38L124.69 128ZM208 48v160a16 16 0 0 1-16 16h-56a8 8 0 0 1 0-16h56V48h-56a8 8 0 0 1 0-16h56a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgSignInDuotone);
export default Memo;
