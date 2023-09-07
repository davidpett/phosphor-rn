import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDoorOpenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 212h-20V40a20 20 0 0 0-20-20H64a20 20 0 0 0-20 20v172H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24Zm-44 0h-16V44h16ZM68 44h80v168H68Zm68 88a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgDoorOpenBold);
export default Memo;
