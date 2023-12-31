import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStopDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 55.27v145.46a7.28 7.28 0 0 1-7.27 7.27H55.27a7.28 7.28 0 0 1-7.27-7.27V55.27A7.28 7.28 0 0 1 55.27 48h145.46a7.28 7.28 0 0 1 7.27 7.27Z"
      opacity={0.2}
    />
    <Path d="M200.73 40H55.27A15.29 15.29 0 0 0 40 55.27v145.46A15.29 15.29 0 0 0 55.27 216h145.46A15.29 15.29 0 0 0 216 200.73V55.27A15.29 15.29 0 0 0 200.73 40ZM200 200H56V56h144Z" />
  </Svg>
);
const Memo = memo(SvgStopDuotone);
export default Memo;
