import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookOpenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 52h-64a36 36 0 0 0-32 19.54A36 36 0 0 0 96 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h64a28 28 0 0 1 28 28 4 4 0 0 0 8 0 28 28 0 0 1 28-28h64a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12ZM96 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h64a28 28 0 0 1 28 28v121.4A35.93 35.93 0 0 0 96 196Zm132-4a4 4 0 0 1-4 4h-64a35.94 35.94 0 0 0-28 13.41V88a28 28 0 0 1 28-28h64a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgBookOpenThin);
export default Memo;
