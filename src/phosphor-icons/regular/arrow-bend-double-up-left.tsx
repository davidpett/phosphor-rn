import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM128 96H99.31l34.35-34.34a8 8 0 0 0-11.32-11.32l-48 48a8 8 0 0 0 0 11.32l48 48a8 8 0 0 0 11.32-11.32L99.31 112H128a88.1 88.1 0 0 1 88 88 8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 96Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpLeft);
export default Memo;
