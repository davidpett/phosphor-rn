import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeEvergreenFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.19 195.51A8 8 0 0 1 224 200h-88v40a8 8 0 0 1-16 0v-40H32a8 8 0 0 1-6.31-12.91l46-59.09H48a8 8 0 0 1-6.34-12.88l80-104a8 8 0 0 1 12.68 0l80 104A8 8 0 0 1 208 128h-23.64l45.95 59.09a8 8 0 0 1 .88 8.42Z" />
  </Svg>
);
const Memo = memo(SvgTreeEvergreenFill);
export default Memo;
