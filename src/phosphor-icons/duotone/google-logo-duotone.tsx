import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 128a88 88 0 1 1-88-88 88 88 0 0 1 88 88Z" opacity={0.2} />
    <Path d="M224 128a96 96 0 1 1-21.95-61.09 8 8 0 1 1-12.33 10.18A80 80 0 1 0 207.6 136H128a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgGoogleLogoDuotone);
export default Memo;
