import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFramerLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 96V32a4 4 0 0 0-4-4H56a4 4 0 0 0-2.66 7l64.14 57H56a4 4 0 0 0-4 4v64a4 4 0 0 0 1.17 2.83l72 72A4 4 0 0 0 132 232v-68h68a4 4 0 0 0 2.66-7l-64.14-57H200a4 4 0 0 0 4-4Zm-14.52 60H128a4 4 0 0 0-4 4v62.34l-64-64V100h66.48ZM196 92h-66.48l-63-56H196Z" />
  </Svg>
);
const Memo = memo(SvgFramerLogoThin);
export default Memo;
