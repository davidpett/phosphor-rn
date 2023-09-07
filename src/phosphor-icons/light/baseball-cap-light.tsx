import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballCapLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26A102.12 102.12 0 0 0 26 128v56a22 22 0 0 0 35 17.74c12.38-9 34.06-19.74 67-19.74s54.61 10.73 67 19.73A22 22 0 0 0 230 184v-56A102.12 102.12 0 0 0 128 26Zm90 102v12.5a164.29 164.29 0 0 0-44.8-20.3A165.07 165.07 0 0 0 141.69 39 90.15 90.15 0 0 1 218 128Zm-57.21-10.78a168.56 168.56 0 0 0-65.58 0c5-38.38 24.16-65.59 32.79-76.14 8.63 10.57 27.8 37.77 32.79 76.15ZM114.31 39a165.07 165.07 0 0 0-31.51 81.21 164.29 164.29 0 0 0-44.8 20.3V128a90.15 90.15 0 0 1 76.31-89Zm98.26 153.85A9.94 9.94 0 0 1 202 192c-13.82-10-37.88-22-74-22s-60.22 12-74 22a9.92 9.92 0 0 1-10.53.85A9.79 9.79 0 0 1 38 184v-29a154 154 0 0 1 180 0v29a9.79 9.79 0 0 1-5.43 8.89Z" />
  </Svg>
);
const Memo = memo(SvgBaseballCapLight);
export default Memo;
