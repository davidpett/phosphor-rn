import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStop = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.73 40H55.27A15.29 15.29 0 0 0 40 55.27v145.46A15.29 15.29 0 0 0 55.27 216h145.46A15.29 15.29 0 0 0 216 200.73V55.27A15.29 15.29 0 0 0 200.73 40ZM200 200H56V56h144Z" />
  </Svg>
);
const Memo = memo(SvgStop);
export default Memo;
