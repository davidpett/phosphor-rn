import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 56a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm-60 50.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0ZM136 80h-32V40a16 16 0 0 1 32 0Z" />
  </Svg>
);
const Memo = memo(SvgThermometerFill);
export default Memo;
