import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleHorizontalBreakBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 128a36 36 0 0 0 36 36h40a12 12 0 0 1 0 24H64a60 60 0 0 1 0-120h40a12 12 0 0 1 0 24H64a36 36 0 0 0-36 36Zm164-60h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleHorizontalBreakBold);
export default Memo;
