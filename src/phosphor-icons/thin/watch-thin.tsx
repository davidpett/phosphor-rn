import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWatchThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 128a75.94 75.94 0 0 0-32.35-62.16l-6.52-36A12 12 0 0 0 153.32 20h-50.64a12 12 0 0 0-11.81 9.86l-6.52 36a75.89 75.89 0 0 0 0 124.32l6.52 36a12 12 0 0 0 11.81 9.82h50.64a12 12 0 0 0 11.81-9.86l6.52-36A75.94 75.94 0 0 0 204 128ZM98.74 31.29a4 4 0 0 1 3.94-3.29h50.64a4 4 0 0 1 3.94 3.29l5.26 29a75.69 75.69 0 0 0-69 0Zm58.52 193.42a4 4 0 0 1-3.94 3.29h-50.64a4 4 0 0 1-3.94-3.29l-5.26-29a75.69 75.69 0 0 0 69 0ZM128 196a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68Zm44-68a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgWatchThin);
export default Memo;
