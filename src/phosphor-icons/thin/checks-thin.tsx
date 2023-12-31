import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChecksThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m146.8 82.85-89.6 88a4 4 0 0 1-5.6 0l-38.4-37.71a4 4 0 0 1 5.6-5.71l35.6 35 86.8-85.24a4 4 0 0 1 5.6 5.7Zm96-5.65a4 4 0 0 0-5.65 0l-86.8 85.24-21.63-21.24a4 4 0 1 0-5.61 5.7l24.44 24a4 4 0 0 0 5.6 0l89.6-88a4 4 0 0 0 .1-5.7Z" />
  </Svg>
);
const Memo = memo(SvgChecksThin);
export default Memo;
