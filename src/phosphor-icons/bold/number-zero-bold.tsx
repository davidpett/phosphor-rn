import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberZeroBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186.62 61.05c-13.76-21.62-34-33-58.62-33s-44.86 11.38-58.62 33C58.17 78.66 52 102.44 52 128s6.17 49.33 17.38 66.94C83.14 216.57 103.41 228 128 228s44.86-11.43 58.62-33.06C197.83 177.33 204 153.56 204 128s-6.17-49.34-17.38-66.95Zm-20.25 121C157.11 196.62 144.2 204 128 204s-29.11-7.38-38.37-21.94C80.84 168.25 76 149.05 76 128s4.84-40.25 13.63-54.06C98.89 59.38 111.8 52 128 52s29.11 7.38 38.37 21.94C175.16 87.75 180 107 180 128s-4.84 40.25-13.63 54.06Z" />
  </Svg>
);
const Memo = memo(SvgNumberZeroBold);
export default Memo;
