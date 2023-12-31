import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartStraightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.84 54.13a62.07 62.07 0 0 0-87.52-.13L128 63.58 117.68 54a62 62 0 0 0-87.58 87.8l89.35 90.65a12 12 0 0 0 17.1 0l89.29-90.59a62 62 0 0 0 0-87.7Zm-17 70.79L128 206.9l-80.87-82.05a38 38 0 0 1 53.74-53.74c.1.1.2.2.31.29l18.64 17.36a12 12 0 0 0 16.36 0l18.64-17.36c.11-.09.21-.19.31-.29a38 38 0 1 1 53.68 53.81Z" />
  </Svg>
);
const Memo = memo(SvgHeartStraightBold);
export default Memo;
