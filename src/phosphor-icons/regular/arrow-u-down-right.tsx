import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUDownRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 173.66-48 48a8 8 0 0 1-11.32-11.32L204.69 176H88a64 64 0 0 1 0-128h88a8 8 0 0 1 0 16H88a48 48 0 0 0 0 96h116.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowUDownRight);
export default Memo;
