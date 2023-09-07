import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUDownRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 173.66-48 48A8 8 0 0 1 168 216v-40H88a64 64 0 0 1 0-128h88a8 8 0 0 1 0 16H88a48 48 0 0 0 0 96h80v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowUDownRightFill);
export default Memo;
