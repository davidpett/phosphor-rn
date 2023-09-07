import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudMoonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 76a72 72 0 0 0-16 1.81 68 68 0 0 0-52.73-64.09 4 4 0 0 0-4.79 4.8 60.05 60.05 0 0 1-72 72 4 4 0 0 0-4.8 4.8 68.2 68.2 0 0 0 34.49 44.78A48 48 0 0 0 84 220h80a72 72 0 0 0 0-144ZM23.22 99.44A69.46 69.46 0 0 0 32 100a68.07 68.07 0 0 0 68-68 69.74 69.74 0 0 0-.56-8.79A59.66 59.66 0 0 1 140 80v.11a72.27 72.27 0 0 0-44.49 45.28A48.28 48.28 0 0 0 84 124a47.75 47.75 0 0 0-29.61 10.26 60.21 60.21 0 0 1-31.17-34.82ZM164 212H84a40 40 0 1 1 9.43-78.88A71.63 71.63 0 0 0 92 143.77a4 4 0 0 0 8 .46 64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 164 212Z" />
  </Svg>
);
const Memo = memo(SvgCloudMoonThin);
export default Memo;
