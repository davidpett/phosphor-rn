import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchMinusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16ZM40 96V64h53.34l21.33 16-21.34 16Zm112 64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchMinusFill);
export default Memo;
