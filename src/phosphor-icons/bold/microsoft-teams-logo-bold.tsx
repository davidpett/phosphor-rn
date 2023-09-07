import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftTeamsLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 104a12 12 0 0 1-12 12h-4v36a12 12 0 0 1-24 0v-36h-4a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12Zm124-11.26V152a44 44 0 0 1-42 44 68 68 0 0 1-122 4H36a20 20 0 0 1-20-20V76a20 20 0 0 1 20-20h56a44 44 0 0 1 80.51-24.53A36 36 0 0 1 221.94 76h1.32A16.76 16.76 0 0 1 240 92.74Zm-60-37.65V56a44.14 44.14 0 0 1-4.77 20H188a12 12 0 1 0-8-20.91ZM116 56h24a19.93 19.93 0 0 1 14.86 6.66A20.25 20.25 0 0 0 156 56a20 20 0 0 0-40 0ZM40 176h96V80H40Zm140-8v-68h-20v80a20 20 0 0 1-20 20h-34.14A44 44 0 0 0 180 168Zm36-68h-12v68c0 .79 0 1.57-.06 2.35A20 20 0 0 0 216 152Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftTeamsLogoBold);
export default Memo;
