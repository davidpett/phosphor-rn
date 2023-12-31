import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockSimpleOpenFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h32V56a48.05 48.05 0 0 1 48-48c23.2 0 43.32 16.15 47.84 38.41a8 8 0 0 1-15.68 3.18C157.2 35 143.37 24 128 24a32 32 0 0 0-32 32v24h112a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgLockSimpleOpenFill);
export default Memo;
