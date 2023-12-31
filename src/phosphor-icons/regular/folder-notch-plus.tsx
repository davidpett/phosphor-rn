import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchPlus = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 120a8 8 0 0 1 8 8v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 8-8Zm104-32v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16ZM40 96h53.33l21.34-16-21.34-16H40Zm176-8h-85.33l-27.74 20.8a16.12 16.12 0 0 1-9.6 3.2H40v88h176Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchPlus);
export default Memo;
