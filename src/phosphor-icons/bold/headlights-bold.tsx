import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeadlightsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 80a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24h-64a12 12 0 0 1-12-12Zm76 84h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Zm0-48h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Zm-92-52v128a20 20 0 0 1-20 20H88a84 84 0 0 1-84-84.63C4.34 81.4 42.43 44 88.9 44H128a20 20 0 0 1 20 20Zm-24 4H88.9C55.57 68 28.25 94.71 28 127.54A60 60 0 0 0 88 188h36Z" />
  </Svg>
);
const Memo = memo(SvgHeadlightsBold);
export default Memo;
