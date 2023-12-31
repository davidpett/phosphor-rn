import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShowerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M62 236a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm22-42a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm-64 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm32-32a10 10 0 1 0 10 10 10 10 0 0 0-10-10ZM254 40a6 6 0 0 1-6 6h-28.69a2 2 0 0 0-1.41.59l-28.31 28.3-21.76 127.43a14 14 0 0 1-23.71 7.57l-98-98a14 14 0 0 1 7.6-23.71l127.4-21.76 28.3-28.31a13.94 13.94 0 0 1 9.9-4.1H248a6 6 0 0 1 6 5.99Zm-77.34 39.34L55.7 100a2 2 0 0 0-1.11 3.39l98 98a2 2 0 0 0 3.39-1.09Z" />
  </Svg>
);
const Memo = memo(SvgShowerLight);
export default Memo;
