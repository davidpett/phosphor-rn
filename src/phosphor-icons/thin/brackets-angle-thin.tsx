import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsAngleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M83.37 42.15 28.74 128l54.63 85.85a4 4 0 0 1-1.22 5.52A4 4 0 0 1 80 220a4 4 0 0 1-3.37-1.85l-56-88a4 4 0 0 1 0-4.3l56-88a4 4 0 1 1 6.74 4.3Zm152 83.7-56-88a4 4 0 1 0-6.74 4.3L227.26 128l-54.63 85.85a4 4 0 0 0 1.22 5.52 4 4 0 0 0 2.15.63 4 4 0 0 0 3.37-1.85l56-88a4 4 0 0 0 0-4.3Z" />
  </Svg>
);
const Memo = memo(SvgBracketsAngleThin);
export default Memo;
