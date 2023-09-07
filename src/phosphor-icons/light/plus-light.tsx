import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a6 6 0 0 1-6 6h-82v82a6 6 0 0 1-12 0v-82H40a6 6 0 0 1 0-12h82V40a6 6 0 0 1 12 0v82h82a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgPlusLight);
export default Memo;
