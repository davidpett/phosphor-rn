import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarHalfFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.2 97.29a16 16 0 0 0-13.81-11L166 81.17l-23.28-55.36a15.95 15.95 0 0 0-29.44 0L90.07 81.17l-59.46 5.14a16 16 0 0 0-9.11 28.07l45.11 39.42-13.52 58.54a16 16 0 0 0 23.84 17.34l51-31 51.11 31a16 16 0 0 0 23.84-17.34l-13.51-58.6 45.1-39.36a16 16 0 0 0 4.73-17.09Zm-15.22 5-45.1 39.36a16 16 0 0 0-5.08 15.71L187.35 216l-51.07-31a15.9 15.9 0 0 0-8.27-2.32V32.09l23.2 55.28a16 16 0 0 0 13.35 9.75l59.44 5.14v.07Z" />
  </Svg>
);
const Memo = memo(SvgStarHalfFill);
export default Memo;
