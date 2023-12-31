import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropHalfBottomLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172.53 49.06a251.42 251.42 0 0 0-41.09-38 6 6 0 0 0-6.88 0 251.42 251.42 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94ZM188.88 186H67.12a74.05 74.05 0 0 1-9.78-20h141.32a74.05 74.05 0 0 1-9.78 20ZM54.69 154a75 75 0 0 1-.69-10 92.09 92.09 0 0 1 .56-10h146.88a92.09 92.09 0 0 1 .56 10 75 75 0 0 1-.69 10ZM128 23.49c13.13 10.12 59.83 49.06 71.39 98.51H56.61C68.17 72.55 114.87 33.61 128 23.49ZM77.48 198h101a73.81 73.81 0 0 1-101 0Z" />
  </Svg>
);
const Memo = memo(SvgDropHalfBottomLight);
export default Memo;
