import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPowerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M122 128V48a6 6 0 0 1 12 0v80a6 6 0 0 1-12 0Zm57.28-77a6 6 0 0 0-6.56 10C196.41 76.47 210 100.88 210 128a82 82 0 0 1-164 0c0-27.12 13.59-51.53 37.28-67a6 6 0 0 0-6.56-10C49.57 68.68 34 96.75 34 128a94 94 0 0 0 188 0c0-31.25-15.57-59.32-42.72-77Z" />
  </Svg>
);
const Memo = memo(SvgPowerLight);
export default Memo;
