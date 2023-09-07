import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgDotBold);
export default Memo;
