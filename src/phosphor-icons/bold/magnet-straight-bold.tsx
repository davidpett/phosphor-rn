import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnetStraightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 36h-40a20 20 0 0 0-20 20v88a12 12 0 0 1-24 0V56a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v88a92 92 0 0 0 92 92h.71c50.34-.38 91.3-42.1 91.3-93V56A20 20 0 0 0 200 36Zm-4 24v24h-32V60ZM92 60v24H60V60Zm36.52 152H128a68 68 0 0 1-68-68v-36h32v36a36 36 0 0 0 72 0v-36h32v35c0 37.77-30.27 68.72-67.48 69Z" />
  </Svg>
);
const Memo = memo(SvgMagnetStraightBold);
export default Memo;
