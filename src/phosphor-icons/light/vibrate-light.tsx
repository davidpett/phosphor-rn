import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVibrateLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 34H96a22 22 0 0 0-22 22v144a22 22 0 0 0 22 22h64a22 22 0 0 0 22-22V56a22 22 0 0 0-22-22Zm10 166a10 10 0 0 1-10 10H96a10 10 0 0 1-10-10V56a10 10 0 0 1 10-10h64a10 10 0 0 1 10 10Zm44-112v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0Zm32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0ZM54 88v80a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0Zm-32 16v48a6 6 0 0 1-12 0v-48a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgVibrateLight);
export default Memo;
