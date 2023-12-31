import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelevisionBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 60h-59l27.52-27.52a12 12 0 0 0-17-17L128 55 88.49 15.51a12 12 0 0 0-17 17L99 60H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20ZM44 84h84v112H44Zm168 112h-60V84h60Zm-44-80a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm32 48a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgTelevisionBold);
export default Memo;
