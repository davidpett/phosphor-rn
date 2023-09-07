import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLineDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.7 134.47A4 4 0 0 0 224 132h-44V72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v60H32a4 4 0 0 0-2.83 6.83l96 96a4 4 0 0 0 5.66 0l96-96a4 4 0 0 0 .87-4.36ZM128 226.34 41.66 140H80a4 4 0 0 0 4-4V76h88v60a4 4 0 0 0 4 4h38.34ZM76 40a4 4 0 0 1 4-4h96a4 4 0 0 1 0 8H80a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLineDownThin);
export default Memo;
