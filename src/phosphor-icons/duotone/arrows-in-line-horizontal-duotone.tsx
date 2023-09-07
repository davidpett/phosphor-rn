import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineHorizontalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m64 96 32 32-32 32Zm96 32 32 32V96Z" opacity={0.2} />
    <Path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm-34.34 82.34a8 8 0 0 1 0 11.32l-32 32A8 8 0 0 1 56 160v-24H16a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66Zm-17 5.66L72 115.31v25.38ZM248 128a8 8 0 0 1-8 8h-40v24a8 8 0 0 1-13.66 5.66l-32-32a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 200 96v24h40a8 8 0 0 1 8 8Zm-64-12.69L171.31 128 184 140.69Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineHorizontalDuotone);
export default Memo;
