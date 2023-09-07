import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudMoonBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 68c-1.66 0-3.31.06-4.95.16a75.93 75.93 0 0 0-58-62.23 12 12 0 0 0-14.37 14.38A52.05 52.05 0 0 1 24.3 82.68 12 12 0 0 0 9.93 97.07a76.61 76.61 0 0 0 27.91 43.27A56 56 0 0 0 84 228h80a80 80 0 0 0 0-160Zm-52.11-32a51.64 51.64 0 0 1 23.68 37.17 80.39 80.39 0 0 0-45.18 43.15A56.5 56.5 0 0 0 84 116a55.69 55.69 0 0 0-28.23 7.66 52.69 52.69 0 0 1-15.63-15.77A76.11 76.11 0 0 0 111.89 36ZM164 204H84a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4 55.78 55.78 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 164 204Z" />
  </Svg>
);
const Memo = memo(SvgCloudMoonBold);
export default Memo;
