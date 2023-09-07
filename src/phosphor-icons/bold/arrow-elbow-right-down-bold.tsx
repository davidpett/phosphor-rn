import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 168.49-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 1 1 17-17L164 179V76H32a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12v115l27.51-27.52a12 12 0 0 1 17 17Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightDownBold);
export default Memo;
