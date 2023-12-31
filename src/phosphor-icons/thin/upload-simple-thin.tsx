import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUploadSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 152v56a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12v-56a4 4 0 0 1 8 0v56a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-56a4 4 0 0 1 8 0ZM90.83 82.83 124 49.66V152a4 4 0 0 0 8 0V49.66l33.17 33.17a4 4 0 1 0 5.66-5.66l-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgUploadSimpleThin);
export default Memo;
