import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGearFineBold = (props: SvgProps) => (
  <Svg
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 116h-12.78A91.1 91.1 0 0 0 213 92.79l11.08-6.4a12 12 0 1 0-12-20.78L201 72a92.85 92.85 0 0 0-17-17l6.41-11.11a12 12 0 1 0-20.78-12L163.21 43A91.1 91.1 0 0 0 140 36.78V24a12 12 0 0 0-24 0v12.78A91.1 91.1 0 0 0 92.79 43l-6.4-11.08a12 12 0 0 0-20.78 12L72 55a92.85 92.85 0 0 0-17 17l-11.07-6.39a12 12 0 0 0-12 20.78L43 92.79A91.1 91.1 0 0 0 36.78 116H24a12 12 0 0 0 0 24h12.78A91.1 91.1 0 0 0 43 163.21l-11.08 6.4a12 12 0 1 0 12 20.78L55 184a92.85 92.85 0 0 0 17 17l-6.41 11.11a12 12 0 1 0 20.78 12L92.79 213a91.1 91.1 0 0 0 23.21 6.22V232a12 12 0 0 0 24 0v-12.78a91.1 91.1 0 0 0 23.21-6.22l6.4 11.08a12 12 0 0 0 20.78-12L184 201a92.85 92.85 0 0 0 17-17l11.11 6.41a12 12 0 1 0 12-20.78L213 163.21a91.1 91.1 0 0 0 6.22-23.21H232a12 12 0 0 0 0-24ZM128 60a68.1 68.1 0 0 1 66.92 56h-60l-30-52A67.61 67.61 0 0 1 128 60Zm-68 68a67.9 67.9 0 0 1 24.16-51.93l30 51.93-30 51.93A67.9 67.9 0 0 1 60 128Zm68 68a67.61 67.61 0 0 1-23.07-4l30-52h60A68.1 68.1 0 0 1 128 196Z" />
  </Svg>
);
const Memo = memo(SvgGearFineBold);
export default Memo;
