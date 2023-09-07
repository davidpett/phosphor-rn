import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHorseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 104a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm92 25.53A108.3 108.3 0 0 1 130.18 236h-2.25A107.31 107.31 0 0 1 56 208.94a12 12 0 1 1 16-17.88 81.13 81.13 0 0 0 16.2 11.26l21.54-29.62c-20.4-7-41.91-3.33-54.44-1.21a35.8 35.8 0 0 1-35.25-14.43c-.15-.21-.3-.43-.44-.65l-13.78-22a12 12 0 0 1 3.88-16.58L108 57.29V32a12 12 0 0 1 12-12h8a108 108 0 0 1 108 109.53Zm-24-.33a84 84 0 0 0-80-85.11V64a12 12 0 0 1-5.71 10.22l-93.71 57.66 7.14 11.41a12 12 0 0 0 11.58 4.54c16.23-2.75 49.4-8.36 79.64 8A36 36 0 0 0 164 120a12 12 0 0 1 24 0 60.09 60.09 0 0 1-53.64 59.66l-22.45 30.87a87.57 87.57 0 0 0 17.8 1.45A84.29 84.29 0 0 0 212 129.2Z" />
  </Svg>
);
const Memo = memo(SvgHorseBold);
export default Memo;
