import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterVerticalSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 124h-36V48a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v76H48a4 4 0 0 0 0 8h36v76a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-76h36a4 4 0 0 0 0-8Zm-44 84a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterVerticalSimpleThin);
export default Memo;
