import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgComputerTowerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 72a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm44-60v176a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h128a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h128a4 4 0 0 0 4-4Zm-68 132a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgComputerTowerThin);
export default Memo;
