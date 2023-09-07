import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipBackCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm40 144a8 8 0 0 1-12.65 6.51L104 137.83V168a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v30.17l51.35-36.68A8 8 0 0 1 168 88Z" />
  </Svg>
);
const Memo = memo(SvgSkipBackCircleFill);
export default Memo;
