import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChalkboardLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 194h-10V56a14 14 0 0 0-14-14H40a14 14 0 0 0-14 14v138H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM38 56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v138h-20v-26a6 6 0 0 0-6-6h-72a6 6 0 0 0-6 6v26H70V86h116v50a6 6 0 0 0 12 0V80a6 6 0 0 0-6-6H64a6 6 0 0 0-6 6v114H38Zm148 138h-60v-20h60Z" />
  </Svg>
);
const Memo = memo(SvgChalkboardLight);
export default Memo;
