import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneLanding = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 216a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8Zm-26.16-24.3L45.21 142.24A40.12 40.12 0 0 1 16 103.72V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 5 4.87l10.6 29.37L88 77.39V48a16 16 0 0 1 21.06-15.18l5.47 1.82a8 8 0 0 1 4.85 4.5l22.5 53.63 60.84 17A40.13 40.13 0 0 1 232 148.32V184a8 8 0 0 1-10.16 7.7ZM216 148.32a24.09 24.09 0 0 0-17.58-23.13l-64.57-18a8 8 0 0 1-5.23-4.61L106 48.67l-2-.67v40a8 8 0 0 1-10.19 7.7l-44-12.54a8 8 0 0 1-5.33-5L33.79 48.59 32 48v55.72a24.09 24.09 0 0 0 17.53 23.12L216 173.45Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneLanding);
export default Memo;
