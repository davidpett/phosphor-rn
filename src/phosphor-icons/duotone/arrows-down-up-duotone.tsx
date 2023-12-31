import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsDownUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 80h-64l32-32ZM80 208l32-32H48Z" opacity={0.2} />
    <Path d="M112 168H88V48a8 8 0 0 0-16 0v120H48a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 112 168Zm-32 28.69L67.31 184h25.38ZM213.66 74.34l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66ZM163.31 72 176 59.31 188.69 72Z" />
  </Svg>
);
const Memo = memo(SvgArrowsDownUpDuotone);
export default Memo;
