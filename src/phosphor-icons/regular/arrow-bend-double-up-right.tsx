import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 109.66-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32Zm-48-11.32-48-48a8 8 0 0 0-11.32 11.32L156.69 96H128A104.11 104.11 0 0 0 24 200a8 8 0 0 0 16 0 88.1 88.1 0 0 1 88-88h28.69l-34.35 34.34a8 8 0 0 0 11.32 11.32l48-48a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpRight);
export default Memo;
