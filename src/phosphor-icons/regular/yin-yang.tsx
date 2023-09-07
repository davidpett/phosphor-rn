import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYinYang = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM40 128a88.1 88.1 0 0 1 88-88 40 40 0 0 1 0 80 56 56 0 0 0-50.61 80A88 88 0 0 1 40 128Zm88 88a40 40 0 0 1 0-80 56 56 0 0 0 50.61-79.95A88 88 0 0 1 128 216Zm12-40a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-24-96a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgYinYang);
export default Memo;
