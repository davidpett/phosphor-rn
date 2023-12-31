import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutLineHorizontalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m16 128 32-32v64Zm192-32v64l32-32Z" opacity={0.2} />
    <Path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm-32 88a8 8 0 0 1-8 8H56v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 56 96v24h40a8 8 0 0 1 8 8Zm-64-12.69L27.31 128 40 140.69Zm205.66 18.35-32 32A8 8 0 0 1 200 160v-24h-40a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66l32 32a8 8 0 0 1 0 11.32Zm-17-5.66L216 115.31v25.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutLineHorizontalDuotone);
export default Memo;
