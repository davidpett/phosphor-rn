import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMedalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.07 8.07 0 0 0 3.57.79 8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96ZM56 96a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Zm16 0a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
  </Svg>
);
const Memo = memo(SvgMedalFill);
export default Memo;
