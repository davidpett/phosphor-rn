import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80v72l-72-72Z" opacity={0.2} />
    <Path d="M232 72h-72a8 8 0 0 0-5.66 13.66L184.69 116 120 180.69 29.66 90.34a8 8 0 0 0-11.32 11.32l96 96a8 8 0 0 0 11.32 0L196 127.31l30.34 30.35A8 8 0 0 0 240 152V80a8 8 0 0 0-8-8Zm-8 60.69L179.31 88H224Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightDuotone);
export default Memo;
