import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTiktokLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80v40a8 8 0 0 1-8 8 103.25 103.25 0 0 1-48-11.71V156a76 76 0 0 1-152 0c0-36.9 26.91-69.52 62.6-75.88A8 8 0 0 1 96 88v42.69a8 8 0 0 1-4.57 7.23A20 20 0 1 0 120 156V24a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8 48.05 48.05 0 0 0 48 48 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgTiktokLogoFill);
export default Memo;
