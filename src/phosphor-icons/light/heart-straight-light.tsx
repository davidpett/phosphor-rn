import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartStraightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.6 58.38a56.06 56.06 0 0 0-79.12-.08L128 71.78 113.52 58.3a56 56 0 0 0-79.15 79.25l89.36 90.66a6 6 0 0 0 8.54 0l89.33-90.62a56 56 0 0 0 0-79.21Zm-8.52 70.75L128 215.45 42.89 129.1a44 44 0 0 1 62.22-62.23 1.07 1.07 0 0 0 .16.14l18.64 17.36a6 6 0 0 0 8.18 0L150.73 67a1.07 1.07 0 0 0 .16-.14 44 44 0 1 1 62.19 62.26Z" />
  </Svg>
);
const Memo = memo(SvgHeartStraightLight);
export default Memo;
