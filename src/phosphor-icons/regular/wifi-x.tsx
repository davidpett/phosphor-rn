import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiX = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.66 98.34a8 8 0 0 1-11.32 11.32L200 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L188.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L200 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L211.31 80ZM128 192a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm44.71-33.47a76.05 76.05 0 0 0-89.42 0 8 8 0 0 0 9.42 12.94 60 60 0 0 1 70.58 0 8 8 0 1 0 9.42-12.94Zm-29.48-93.8a8 8 0 1 0 1.54-15.92c-5.53-.54-11.18-.81-16.77-.81A172.35 172.35 0 0 0 18.92 87a8 8 0 1 0 10.16 12.37A156.25 156.25 0 0 1 128 64c5.08 0 10.2.25 15.23.73Zm-.32 48.27a8 8 0 0 0 2.18-15.85A124.75 124.75 0 0 0 128 96a122.74 122.74 0 0 0-77 26.77A8 8 0 0 0 56 137a7.93 7.93 0 0 0 5-1.73A106.87 106.87 0 0 1 128 112a109 109 0 0 1 14.91 1Z" />
  </Svg>
);
const Memo = memo(SvgWifiX);
export default Memo;
