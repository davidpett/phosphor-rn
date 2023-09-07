import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSidebarFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM64 152H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm152 112H88V56h128v144Z" />
  </Svg>
);
const Memo = memo(SvgSidebarFill);
export default Memo;
