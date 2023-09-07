import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 192a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V67.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L88 67.31V184h136a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftUp);
export default Memo;
