import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVibrate = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24Zm8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0ZM56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgVibrate);
export default Memo;
