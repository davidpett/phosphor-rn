import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartStraightBreak = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223 57a58.1 58.1 0 0 0-82-.06l-13 12.53-13-12.56a58 58 0 0 0-82 82.05l89.37 90.66a8 8 0 0 0 11.4 0L223 139a58.09 58.09 0 0 0 0-82Zm-11.36 70.76L128 212.6l-83.71-84.92a42 42 0 1 1 59.41-59.4l.1.1 12.67 12.19-10 9.65a8 8 0 0 0-.11 11.42L132.69 128l-10.35 10.35a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.31l-26.24-26.27 28.78-27.71.11-.1a42 42 0 1 1 59.37 59.44Z" />
  </Svg>
);
const Memo = memo(SvgHeartStraightBreak);
export default Memo;
