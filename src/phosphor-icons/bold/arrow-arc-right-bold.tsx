import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowArcRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 88v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h34.9l-15.48-15.37A84 84 0 0 0 44 184a12 12 0 0 1-24 0 108 108 0 0 1 184.37-76.37L220 123.16V88a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowArcRightBold);
export default Memo;
