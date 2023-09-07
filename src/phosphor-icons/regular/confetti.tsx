import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgConfetti = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21-35-35 13.16-36.21 58.05 58.05Zm-55 20 14-38.41 24.45 24.45ZM156 168.64 87.36 100l13-35.87 91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85 8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85 8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z" />
  </Svg>
);
const Memo = memo(SvgConfetti);
export default Memo;
