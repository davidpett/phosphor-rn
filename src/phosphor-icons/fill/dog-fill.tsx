import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDogFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m239.71 125-16.42-88a16 16 0 0 0-19.61-12.58l-.31.09L150.85 40h-45.7L52.63 24.56l-.31-.09a16 16 0 0 0-19.61 12.58L16.29 125a15.77 15.77 0 0 0 9.12 17.52 16.26 16.26 0 0 0 6.71 1.48 15.48 15.48 0 0 0 7.88-2.16V184a40 40 0 0 0 40 40h96a40 40 0 0 0 40-40v-42.15a15.5 15.5 0 0 0 7.87 2.16 16.31 16.31 0 0 0 6.72-1.47 15.77 15.77 0 0 0 9.12-17.54ZM176 208h-40v-12.69l13.66-13.65a8 8 0 0 0-11.32-11.32L128 180.69l-10.34-10.35a8 8 0 0 0-11.32 11.32L120 195.31V208H80a24 24 0 0 1-24-24v-60.89L107.93 56h40.14L200 123.11V184a24 24 0 0 1-24 24Zm-72-68a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgDogFill);
export default Memo;
