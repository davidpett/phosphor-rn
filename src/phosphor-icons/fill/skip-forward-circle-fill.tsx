import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 144a8 8 0 0 1-16 0v-30.17l-51.35 36.68A8 8 0 0 1 88 168V88a8 8 0 0 1 12.65-6.51L152 118.17V88a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardCircleFill);
export default Memo;
