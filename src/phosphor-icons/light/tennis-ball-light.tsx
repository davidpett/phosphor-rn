import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTennisBallLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.16 55.88a102 102 0 1 0 0 144.24 101.4 101.4 0 0 0 0-144.24ZM64.33 64.36a89.62 89.62 0 0 1 57.25-26.07 89.32 89.32 0 0 1-26.12 57.18 89.38 89.38 0 0 1-57.21 26.11 89.61 89.61 0 0 1 26.08-57.22ZM38.2 133.63A101.36 101.36 0 0 0 104 104a101.24 101.24 0 0 0 29.68-65.72 89.76 89.76 0 0 1 84.17 84.13 102 102 0 0 0-95.43 95.39 89.76 89.76 0 0 1-84.22-84.17Zm153.47 58a89.63 89.63 0 0 1-57.25 26.06 89.94 89.94 0 0 1 83.33-83.28 89.61 89.61 0 0 1-26.08 57.23Z" />
  </Svg>
);
const Memo = memo(SvgTennisBallLight);
export default Memo;
