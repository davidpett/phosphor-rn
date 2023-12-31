import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBriefcaseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M106 112a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6Zm124-40v128a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h42V48a22 22 0 0 1 22-22h48a22 22 0 0 1 22 22v10h42a14 14 0 0 1 14 14ZM94 58h68V48a10 10 0 0 0-10-10h-48a10 10 0 0 0-10 10ZM38 72v42.79A186 186 0 0 0 128 138a185.91 185.91 0 0 0 90-23.22V72a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2Zm180 128v-71.63A198.12 198.12 0 0 1 128 150a198.05 198.05 0 0 1-90-21.62V200a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgBriefcaseLight);
export default Memo;
