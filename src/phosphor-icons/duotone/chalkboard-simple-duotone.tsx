import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChalkboardSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 168v32h-64v-32Z" opacity={0.2} />
    <Path d="M24 168V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16v112a8 8 0 0 1-16 0V56H40v112a8 8 0 0 1-16 0Zm224 32a8 8 0 0 1-8 8H16a8 8 0 0 1 0-16h96v-24a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v24h48a8 8 0 0 1 8 8Zm-120-8h48v-16h-48Z" />
  </Svg>
);
const Memo = memo(SvgChalkboardSimpleDuotone);
export default Memo;
