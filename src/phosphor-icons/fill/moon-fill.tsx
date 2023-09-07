import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoonFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52 104.84 104.84 0 0 1 52.91-37 8 8 0 0 1 10 10 88.08 88.08 0 0 0 109.8 109.8 8 8 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgMoonFill);
export default Memo;
