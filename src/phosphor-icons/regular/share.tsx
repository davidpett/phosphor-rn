import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShare = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 109.66-48 48a8 8 0 0 1-11.32-11.32L204.69 112H165a88 88 0 0 0-85.23 66 8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h39.71l-34.37-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32ZM192 208H40V88a8 8 0 0 0-16 0v120a16 16 0 0 0 16 16h152a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgShare);
export default Memo;
