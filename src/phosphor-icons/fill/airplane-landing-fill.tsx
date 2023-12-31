import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneLandingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 216a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8Zm-24-24a8 8 0 0 0 8-8v-35.68a40.13 40.13 0 0 0-29.28-38.54l-60.84-17-22.5-53.63a8 8 0 0 0-4.85-4.5l-5.47-1.82A16 16 0 0 0 88 48v29.39l-29.87-8.51-10.61-29.37a8 8 0 0 0-5-4.87l-5.47-1.82A16 16 0 0 0 16 48v55.72a40.12 40.12 0 0 0 29.21 38.52l176.63 49.46a8 8 0 0 0 2.16.3Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneLandingFill);
export default Memo;
