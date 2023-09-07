import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMediumLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 128a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm48-64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64Zm56 0a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0V72a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgMediumLogoFill);
export default Memo;
