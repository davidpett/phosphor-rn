import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerHotFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M177.41 80.54a8 8 0 0 1 2.05-11.12c10.4-7.18 26.68-7.18 37.08 0 5 3.47 13.88 3.47 18.92 0a8 8 0 0 1 9.08 13.16 34.64 34.64 0 0 1-37.08 0c-5-3.47-13.88-3.47-18.92 0a8 8 0 0 1-11.13-2.04Zm58.05 20.88c-5 3.47-13.88 3.47-18.92 0-10.4-7.18-26.68-7.18-37.08 0a8 8 0 1 0 9.08 13.16c5-3.47 13.88-3.47 18.92 0a34.64 34.64 0 0 0 37.08 0 8 8 0 0 0-9.08-13.16ZM176 192a56 56 0 1 1-88-45.92V40a32 32 0 0 1 64 0v106.08A56 56 0 0 1 176 192ZM136 40a16 16 0 0 0-32 0v40h32Z" />
  </Svg>
);
const Memo = memo(SvgThermometerHotFill);
export default Memo;
