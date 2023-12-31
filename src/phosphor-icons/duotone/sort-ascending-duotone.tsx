import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortAscendingDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 168-40 40-40-40Z" opacity={0.2} />
    <Path d="M128 128a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h72a8 8 0 0 1 8 8ZM48 72h136a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16Zm56 112H48a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16Zm125.66-10.34-40 40a8 8 0 0 1-11.32 0l-40-40A8 8 0 0 1 144 160h32v-48a8 8 0 0 1 16 0v48h32a8 8 0 0 1 5.66 13.66Zm-25 2.34h-41.35L184 196.69Z" />
  </Svg>
);
const Memo = memo(SvgSortAscendingDuotone);
export default Memo;
