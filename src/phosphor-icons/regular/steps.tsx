import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSteps = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 56a8 8 0 0 1-8 8h-48v40a8 8 0 0 1-8 8h-48v40a8 8 0 0 1-8 8H80v40a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h48v-40a8 8 0 0 1 8-8h48v-40a8 8 0 0 1 8-8h48V56a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgSteps);
export default Memo;
