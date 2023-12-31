import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExport = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 112v96a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h24a8 8 0 0 1 0 16H56v96h144v-96h-24a8 8 0 0 1 0-16h24a16 16 0 0 1 16 16ZM93.66 69.66 120 43.31V136a8 8 0 0 0 16 0V43.31l26.34 26.35a8 8 0 0 0 11.32-11.32l-40-40a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgExport);
export default Memo;
