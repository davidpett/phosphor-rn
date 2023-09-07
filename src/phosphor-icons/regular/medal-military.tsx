import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMedalMilitary = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M207 32H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 113.68a17 17 0 0 0 10-15.47V49a17 17 0 0 0-17-17Zm-47 16v72.67l-32 14.54-32-14.54V48ZM48 98.21V49a1 1 0 0 1 1-1h31v65.39L48.59 99.12a1 1 0 0 1-.59-.91ZM128 216a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm80-117.79a1 1 0 0 1-.59.91L176 113.39V48h31a1 1 0 0 1 1 1Z" />
  </Svg>
);
const Memo = memo(SvgMedalMilitary);
export default Memo;
