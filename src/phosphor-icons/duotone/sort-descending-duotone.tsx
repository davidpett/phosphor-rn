import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortDescendingDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 88h-80l40-40Z" opacity={0.2} />
    <Path d="M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8Zm8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16Zm136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16Zm47.39-92.94A8 8 0 0 1 224 96h-32v48a8 8 0 0 1-16 0V96h-32a8 8 0 0 1-5.66-13.66l40-40a8 8 0 0 1 11.32 0l40 40a8 8 0 0 1 1.73 8.72ZM204.69 80 184 59.31 163.31 80Z" />
  </Svg>
);
const Memo = memo(SvgSortDescendingDuotone);
export default Memo;
