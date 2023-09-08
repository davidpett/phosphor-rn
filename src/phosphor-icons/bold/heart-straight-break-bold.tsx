import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartStraightBreakBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.84 54.16a62 62 0 0 0-87.6-.08L128 63.94l-10.24-9.86a62 62 0 0 0-87.66 87.7l89.35 90.64a12 12 0 0 0 17.1 0l89.29-90.58a62 62 0 0 0 0-87.68Zm-17 70.77-80.81 82-80.87-82a38 38 0 1 1 53.74-53.74l.16.16 9.67 9.31-7 6.76a12 12 0 0 0-.17 17.13L127 128l-7.52 7.51a12 12 0 1 0 17 17l16-16a12 12 0 0 0 0-17l-23.35-23.35L155 71.29l.16-.16a38 38 0 1 1 53.68 53.8Z" />
  </Svg>
);
const Memo = memo(SvgHeartStraightBreakBold);
export default Memo;
