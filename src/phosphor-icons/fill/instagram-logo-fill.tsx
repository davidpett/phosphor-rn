import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInstagramLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm-48 152a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48Zm60-96a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm-28 48a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" />
  </Svg>
);
const Memo = memo(SvgInstagramLogoFill);
export default Memo;
