import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M160 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0Zm-32 70a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"
      opacity={0.2}
    />
    <Path d="M136 153V88a8 8 0 0 0-16 0v65a32 32 0 1 0 16 0Zm-8 47a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm40-66V48a40 40 0 0 0-80 0v86a64 64 0 1 0 80 0Zm-40 98a48 48 0 0 1-27.42-87.4A8 8 0 0 0 104 138V48a24 24 0 0 1 48 0v90a8 8 0 0 0 3.42 6.56A48 48 0 0 1 128 232Z" />
  </Svg>
);
const Memo = memo(SvgThermometerSimpleDuotone);
export default Memo;
