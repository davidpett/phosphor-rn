import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseLineLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 210h-18v-94.45a14.06 14.06 0 0 0-4.53-10.32l-80-75.49-.09-.08a13.94 13.94 0 0 0-18.83 0l-.09.08-80 75.5A14 14 0 0 0 34 115.55V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM46 115.55a2 2 0 0 1 .65-1.48l.09-.08 79.94-75.48a2 2 0 0 1 2.63 0L209.26 114l.08.08a2 2 0 0 1 .66 1.48V210h-52v-50a14 14 0 0 0-14-14h-32a14 14 0 0 0-14 14v50H46ZM146 210h-36v-50a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgHouseLineLight);
export default Memo;
