import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderIntersexBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 20h-40a12 12 0 0 0 0 24h11l-15.64 15.67A68 68 0 1 0 108 178.92V188H88a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24h-20v-9.08a67.93 67.93 0 0 0 46.9-100.84L196 61v11a12 12 0 0 0 24 0V32a12 12 0 0 0-12-12Zm-88 136a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgGenderIntersexBold);
export default Memo;
