import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEggCrackDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 152a80 80 0 0 1-160 0c0-64 48-128 80-128s80 64 80 128Z"
      opacity={0.2}
    />
    <Path d="M186.66 59.56C168.47 32.29 146.54 16 128 16S87.53 32.29 69.34 59.56C50.7 87.54 40 121.23 40 152a88 88 0 0 0 176 0c0-30.77-10.7-64.46-29.34-92.44ZM128 224a72.08 72.08 0 0 1-72-72c0-27.69 9.72-58.15 26.66-83.56C97.19 46.64 115.41 32 128 32c9.5 0 22.2 8.33 34.1 21.78L122 98.67a8 8 0 0 0 4 13.09l24.6 6.15-6.5 32.52a8 8 0 0 0 6.27 9.41 7.77 7.77 0 0 0 1.63.16 8 8 0 0 0 7.83-6.43l8-40a8 8 0 0 0-5.9-9.33l-19.16-4.79L172.1 66.6c.42.61.83 1.22 1.24 1.84C190.28 93.85 200 124.31 200 152a72.08 72.08 0 0 1-72 72Z" />
  </Svg>
);
const Memo = memo(SvgEggCrackDuotone);
export default Memo;
