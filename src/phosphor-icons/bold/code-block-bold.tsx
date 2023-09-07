import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeBlockBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m51.51 104.49-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L45 64l23.49 23.51a12 12 0 0 1-17 17Zm48 0a12 12 0 0 0 17 0l32-32a12 12 0 0 0 0-17l-32-32a12 12 0 1 0-17 17L123 64 99.51 87.51a12 12 0 0 0 0 16.98ZM200 36h-20a12 12 0 0 0 0 24h16v136H60v-56a12 12 0 0 0-24 0v60a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Z" />
  </Svg>
);
const Memo = memo(SvgCodeBlockBold);
export default Memo;
