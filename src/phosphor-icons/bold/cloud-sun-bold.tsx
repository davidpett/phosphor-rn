import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudSunBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 68a80.39 80.39 0 0 0-18.46 2.15 59.87 59.87 0 0 0-6-7.42l7.57-10.82a12 12 0 0 0-19.66-13.77L111.87 49a59.85 59.85 0 0 0-22.26-5l-2.3-13a12 12 0 0 0-23.63 4.17l2.3 13a60 60 0 0 0-19.21 12.3l-10.86-7.61a12 12 0 0 0-13.77 19.66L33 80.11a59.45 59.45 0 0 0-5 22.25l-13 2.3a12 12 0 0 0 2.07 23.82 12.59 12.59 0 0 0 2.1-.18l13-2.3a59.29 59.29 0 0 0 3.44 7.25A56 56 0 0 0 76 228h80a80 80 0 0 0 0-160Zm-68 0a36 36 0 0 1 26.45 11.61 80.37 80.37 0 0 0-32.06 36.75A56.5 56.5 0 0 0 76 116a55.84 55.84 0 0 0-20.33 3.83A36 36 0 0 1 88 68Zm68 136H76a32 32 0 0 1 0-64h.28c-.11 1.1-.2 2.2-.26 3.3a12 12 0 0 0 24 1.4 55.78 55.78 0 0 1 1.74-11l.15-.55A56.06 56.06 0 1 1 156 204Z" />
  </Svg>
);
const Memo = memo(SvgCloudSunBold);
export default Memo;
