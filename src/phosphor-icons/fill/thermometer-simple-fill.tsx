import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 146.08V40a32 32 0 0 0-64 0v106.08a56 56 0 1 0 64 0ZM128 24a16 16 0 0 1 16 16v40h-32V40a16 16 0 0 1 16-16Z" />
  </Svg>
);
const Memo = memo(SvgThermometerSimpleFill);
export default Memo;
