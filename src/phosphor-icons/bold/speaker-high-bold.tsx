import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerHighBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M157.27 21.22a12 12 0 0 0-12.64 1.31L75.88 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224V32a12 12 0 0 0-6.73-10.78ZM36 100h32v56H36Zm104 99.46-48-37.33V93.87l48-37.33ZM212 128a44 44 0 0 1-11 29.11 12 12 0 1 1-18-15.88 20 20 0 0 0 0-26.43 12 12 0 0 1 18-15.86A43.94 43.94 0 0 1 212 128Zm40 0a83.87 83.87 0 0 1-21.39 56 12 12 0 0 1-17.89-16 60 60 0 0 0 0-80 12 12 0 1 1 17.88-16 83.87 83.87 0 0 1 21.4 56Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerHighBold);
export default Memo;
