import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellRingingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222.13 67.55a3.94 3.94 0 0 1-1.84.45 4 4 0 0 1-3.55-2.16 99.41 99.41 0 0 0-34.87-38.46 4 4 0 1 1 4.26-6.76 107.34 107.34 0 0 1 37.71 41.54 4 4 0 0 1-1.71 5.39ZM39.26 65.84a99.41 99.41 0 0 1 34.87-38.46 4 4 0 0 0-4.26-6.76 107.34 107.34 0 0 0-37.71 41.54 4 4 0 0 0 1.71 5.39 3.94 3.94 0 0 0 1.84.45 4 4 0 0 0 3.55-2.16ZM218.36 178A12 12 0 0 1 208 196h-44.23a36 36 0 0 1-71.54 0H48a12 12 0 0 1-10.36-18C47.17 161.56 52 139.37 52 112a76 76 0 0 1 152 0c0 27.36 4.83 49.55 14.36 66Zm-62.65 18h-55.42a28 28 0 0 0 55.42 0Zm55.73-14C201.19 164.34 196 140.79 196 112a68 68 0 0 0-136 0c0 28.8-5.19 52.34-15.44 70a4 4 0 0 0 0 4 3.89 3.89 0 0 0 3.44 2h160a3.89 3.89 0 0 0 3.43-2 4 4 0 0 0 .01-4Z" />
  </Svg>
);
const Memo = memo(SvgBellRingingThin);
export default Memo;
