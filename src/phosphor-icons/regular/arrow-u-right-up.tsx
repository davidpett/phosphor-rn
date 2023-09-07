import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowURightUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.66 85.66a8 8 0 0 1-11.32 0L176 51.31V168a64 64 0 0 1-128 0V80a8 8 0 0 1 16 0v88a48 48 0 0 0 96 0V51.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowURightUp);
export default Memo;
