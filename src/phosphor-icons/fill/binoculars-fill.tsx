import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBinocularsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.22 151.9v-.1a1.42 1.42 0 0 0-.07-.22 48.46 48.46 0 0 0-2.31-5.3L193.27 51.8a8 8 0 0 0-1.67-2.44 32 32 0 0 0-45.26 0A8 8 0 0 0 144 55v25h-32V55a8 8 0 0 0-2.34-5.66 32 32 0 0 0-45.26 0 8 8 0 0 0-1.67 2.44l-41.53 94.5a48.46 48.46 0 0 0-2.31 5.3 1.72 1.72 0 0 0-.07.21s0 .08 0 .11a48 48 0 0 0 90.32 32.51 47.49 47.49 0 0 0 2.9-16.59V96h32v71.83a47.49 47.49 0 0 0 2.9 16.59 48 48 0 0 0 90.32-32.51Zm-143.15 27a32 32 0 0 1-60.2-21.71l1.81-4.13A32 32 0 0 1 96 167.88v.12a32 32 0 0 1-1.93 10.94ZM203 198.07A32 32 0 0 1 160 168v-.11a32 32 0 0 1 60.32-14.78l1.81 4.13A32 32 0 0 1 203 198.07Z" />
  </Svg>
);
const Memo = memo(SvgBinocularsFill);
export default Memo;