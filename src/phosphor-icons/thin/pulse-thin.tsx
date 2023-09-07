import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPulseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 128a4 4 0 0 1-4 4h-29.53l-38.89 77.79A4 4 0 0 1 160 212h-.2a4 4 0 0 1-3.54-2.58l-60.59-159-36 79.28A4 4 0 0 1 56 132H24a4 4 0 0 1 0-8h29.42l38.94-85.65a4 4 0 0 1 7.38.23l60.76 159.48 35.92-71.85A4 4 0 0 1 200 124h32a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPulseThin);
export default Memo;
