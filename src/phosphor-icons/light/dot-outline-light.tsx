import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotOutlineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 98a30 30 0 1 0 30 30 30 30 0 0 0-30-30Zm0 48a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgDotOutlineLight);
export default Memo;
