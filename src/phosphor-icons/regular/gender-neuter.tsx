import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNeuter = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 104a80 80 0 1 0-88 79.6V232a8 8 0 0 0 16 0v-48.4a80.11 80.11 0 0 0 72-79.6Zm-80 64a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" />
  </Svg>
);
const Memo = memo(SvgGenderNeuter);
export default Memo;
