import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGhostFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a96.11 96.11 0 0 0-96 96v96a8 8 0 0 0 13.07 6.19l24.26-19.85 24.27 19.85a8 8 0 0 0 10.13 0L128 202.34l24.27 19.85a8 8 0 0 0 10.13 0l24.27-19.85 24.26 19.85A8 8 0 0 0 224 216v-96a96.11 96.11 0 0 0-96-96Zm-28 104a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm56 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgGhostFill);
export default Memo;
