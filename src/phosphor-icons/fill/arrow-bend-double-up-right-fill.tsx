import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 109.66-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32Zm-48-11.32-48-48A8 8 0 0 0 120 56v40.3A104.15 104.15 0 0 0 24 200a8 8 0 0 0 16 0 88.11 88.11 0 0 1 80-87.63V152a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpRightFill);
export default Memo;
