import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighHeel = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m231 164.19-51-11.49L69.66 42.34a8 8 0 0 0-11.56.26C36.11 66.64 24 97 24 128v72a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-48.94c2.49 1.45 4.94 3 7.34 4.64a112.45 112.45 0 0 1 40.55 50.39 15.9 15.9 0 0 0 14.83 9.91H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08ZM72 200H40v-63.71a110.88 110.88 0 0 1 32 7.12Zm168 0h-89.32a128.36 128.36 0 0 0-46.27-57.46 126.9 126.9 0 0 0-64.12-22.26 110.67 110.67 0 0 1 24.17-60.5l105.88 105.88a8 8 0 0 0 3.9 2.14l53.24 12A15.81 15.81 0 0 1 240 195.31Z" />
  </Svg>
);
const Memo = memo(SvgHighHeel);
export default Memo;
