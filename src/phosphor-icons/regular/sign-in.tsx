import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignIn = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m141.66 133.66-40 40a8 8 0 0 1-11.32-11.32L116.69 136H24a8 8 0 0 1 0-16h92.69L90.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32ZM192 32h-56a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h56a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgSignIn);
export default Memo;
