import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsAngleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M85.06 43.22 31.11 128l54 84.78a6 6 0 0 1-1.84 8.28 6 6 0 0 1-8.28-1.84l-56-88a6 6 0 0 1 0-6.44l56-88a6 6 0 0 1 10.12 6.44Zm152 81.56-56-88a6 6 0 1 0-10.12 6.44L224.89 128l-53.95 84.78a6 6 0 0 0 1.84 8.28 6 6 0 0 0 8.28-1.84l56-88a6 6 0 0 0 0-6.44Z" />
  </Svg>
);
const Memo = memo(SvgBracketsAngleLight);
export default Memo;
