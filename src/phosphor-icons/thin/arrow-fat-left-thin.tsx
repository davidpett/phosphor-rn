import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 76h-84V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h84a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm4 92a4 4 0 0 1-4 4h-88a4 4 0 0 0-4 4v38.34L29.66 128 116 41.66V80a4 4 0 0 0 4 4h88a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLeftThin);
export default Memo;
