import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUUpLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 144a60.07 60.07 0 0 1-60 60H80a4 4 0 0 1 0-8h88a52 52 0 0 0 0-104H41.66l41.17 41.17a4 4 0 0 1-5.66 5.66l-48-48a4 4 0 0 1 0-5.66l48-48a4 4 0 0 1 5.66 5.66L41.66 84H168a60.07 60.07 0 0 1 60 60Z" />
  </Svg>
);
const Memo = memo(SvgArrowUUpLeftThin);
export default Memo;
