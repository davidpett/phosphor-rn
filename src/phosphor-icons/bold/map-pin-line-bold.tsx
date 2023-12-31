import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapPinLineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 220h-39.27c5.18-5 10.75-10.71 16.33-17.13C205.15 170.57 220 136.37 220 104a92 92 0 0 0-184 0c0 50 34.12 91.94 59.18 116H56a12 12 0 0 0 0 24h144a12 12 0 0 0 0-24ZM60 104a68 68 0 0 1 136 0c0 33.31-20 63.37-36.7 82.71a249.35 249.35 0 0 1-31.3 30.18 249.35 249.35 0 0 1-31.3-30.18C80 167.37 60 137.31 60 104Zm68 44a44 44 0 1 0-44-44 44.05 44.05 0 0 0 44 44Zm0-64a20 20 0 1 1-20 20 20 20 0 0 1 20-20Z" />
  </Svg>
);
const Memo = memo(SvgMapPinLineBold);
export default Memo;
