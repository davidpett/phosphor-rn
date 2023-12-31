import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRssFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM76 192a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm44 0a8 8 0 0 1-8-8 40 40 0 0 0-40-40 8 8 0 0 1 0-16 56.06 56.06 0 0 1 56 56 8 8 0 0 1-8 8Zm32 0a8 8 0 0 1-8-8 72.08 72.08 0 0 0-72-72 8 8 0 0 1 0-16 88.1 88.1 0 0 1 88 88 8 8 0 0 1-8 8Zm32 0a8 8 0 0 1-8-8A104.11 104.11 0 0 0 72 80a8 8 0 0 1 0-16 120.13 120.13 0 0 1 120 120 8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgRssFill);
export default Memo;
