import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 84h-76V48a4 4 0 0 0-8 0v36H48a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h76v36a4 4 0 0 0 8 0v-36h76a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12Zm4 76a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalSimpleThin);
export default Memo;
