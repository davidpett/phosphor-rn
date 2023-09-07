import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfinity = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 128a56 56 0 0 1-95.6 39.6l-.33-.35-59.95-67.7a40 40 0 1 0 0 56.9l8.52-9.62a8 8 0 1 1 12 10.61l-8.69 9.81-.33.35a56 56 0 1 1 0-79.2l.33.35 59.95 67.7a40 40 0 1 0 0-56.9l-8.52 9.62a8 8 0 1 1-12-10.61l8.69-9.81.33-.35A56 56 0 0 1 248 128Z" />
  </Svg>
);
const Memo = memo(SvgInfinity);
export default Memo;
