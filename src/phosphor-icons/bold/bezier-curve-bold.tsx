import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBezierCurveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224.28 141a100.61 100.61 0 0 0-31.4-49H240a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H16a12 12 0 0 0 0 24h47.12a100.61 100.61 0 0 0-31.4 49A36 36 0 1 0 56 143.74a76.66 76.66 0 0 1 41.15-45.21 36 36 0 0 0 61.7 0A76.66 76.66 0 0 1 200 143.74a36 36 0 1 0 24.28-2.74ZM40 188a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm88-96a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm88 96a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgBezierCurveBold);
export default Memo;
