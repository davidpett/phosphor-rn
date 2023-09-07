import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudRainFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m158.66 196.44-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88Zm73.21-108.89a76 76 0 0 0-151.78.73A8.18 8.18 0 0 1 72 96h-.6a8.14 8.14 0 0 1-7.4-8.61 92.48 92.48 0 0 1 2.33-16.51 4 4 0 0 0-5-4.78A52.09 52.09 0 0 0 24 116.36C24.2 145.07 48.12 168 76.84 168h36.21l-23.71 35.56a8 8 0 0 0 13.32 8.88L132.28 168H156a76.08 76.08 0 0 0 75.87-80.45Z" />
  </Svg>
);
const Memo = memo(SvgCloudRainFill);
export default Memo;
