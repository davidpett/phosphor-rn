import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowURightDown = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.66 181.66-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L160 204.69V88a48 48 0 0 0-96 0v88a8 8 0 0 1-16 0V88a64 64 0 0 1 128 0v116.69l34.34-34.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowURightDown);
export default Memo;
