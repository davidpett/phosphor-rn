import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFourDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M184 152a8 8 0 0 1-8 8h-16v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1-7.53-10.69l40-112a8 8 0 0 1 15.06 5.38L83.35 144H144V96a8 8 0 0 1 16 0v48h16a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgNumberFourDuotone);
export default Memo;
