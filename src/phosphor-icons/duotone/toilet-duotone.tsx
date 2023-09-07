import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M167.92 222.87A8 8 0 0 1 160 232H96a8 8 0 0 1-7.92-9.13l4.34-30.36a88.21 88.21 0 0 0 71.14 0ZM184 32H72a8 8 0 0 0-8 8v72h128V40a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M120 64a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Zm52.32 133.14 3.52 24.6A16 16 0 0 1 160 240H96a16 16 0 0 1-15.84-18.26l3.52-24.6A96.09 96.09 0 0 1 32 112a8 8 0 0 1 8-8h16V40a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16v64h16a8 8 0 0 1 8 8 96.09 96.09 0 0 1-51.68 85.14ZM72 104h112V40H72Zm85.07 99.5a96.15 96.15 0 0 1-58.14 0L96 224h64ZM207.6 120H48.4a80 80 0 0 0 159.2 0Z" />
  </Svg>
);
const Memo = memo(SvgToiletDuotone);
export default Memo;
