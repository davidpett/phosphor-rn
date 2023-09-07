import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMetaLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 149.31c0 15.75-3.07 29.17-8.88 38.81-7.05 11.7-18 17.88-31.68 17.88-26.74 0-46.3-36.51-67-75.17C113.14 98.57 93.55 62 74 62c-23.28 0-44 48.83-44 87.31 0 13.57 2.48 24.84 7.16 32.62 4.9 8.12 11.9 12.07 21.4 12.07 16.16 0 32.31-25.06 46-49.57a6 6 0 0 1 10.44 5.84C100 177.23 82 206 58.56 206c-13.67 0-24.63-6.18-31.68-17.88-5.81-9.64-8.88-23.06-8.88-38.81C18 108.82 39.81 50 74 50c26.74 0 46.3 36.51 67 75.17 17.29 32.26 36.88 68.83 56.44 68.83 9.5 0 16.5-3.95 21.4-12.07 4.68-7.78 7.16-19.05 7.16-32.62C226 110.83 205.29 62 182 62c-9 0-18.91 7.76-30.14 23.73a6 6 0 0 1-9.82-6.91C150.75 66.45 164.37 50 182 50c34.19 0 56 58.82 56 99.31Z" />
  </Svg>
);
const Memo = memo(SvgMetaLogoLight);
export default Memo;
