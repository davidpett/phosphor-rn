import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 150.69V56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0ZM128 228a40 40 0 0 1-30.91-65.39 12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 128 228Zm24-40a24 24 0 1 1-36-20.78V92a12 12 0 0 1 24 0v75.22A24 24 0 0 1 152 188Z" />
  </Svg>
);
const Memo = memo(SvgThermometerSimpleBold);
export default Memo;
