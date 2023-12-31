import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlugChargingDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 64v96a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64Z"
      opacity={0.2}
    />
    <Path d="M224 56h-48V16a8 8 0 0 0-16 0v40H96V16a8 8 0 0 0-16 0v40H32.55C26.28 56 24 60.78 24 64a8 8 0 0 0 8 8h16v88a40 40 0 0 0 40 40h32v40a8 8 0 0 0 16 0v-40h32a40 40 0 0 0 40-40V72h16a8 8 0 0 0 0-16Zm-32 104a24 24 0 0 1-24 24H88a24 24 0 0 1-24-24V72h128Zm-86.58-27.44a8 8 0 0 1-.91-7.37l12-32a8 8 0 1 1 15 5.62l-8 21.19H144a8 8 0 0 1 7.49 10.81l-12 32a8 8 0 0 1-15-5.62l8-21.19H112a8 8 0 0 1-6.58-3.44Z" />
  </Svg>
);
const Memo = memo(SvgPlugChargingDuotone);
export default Memo;
