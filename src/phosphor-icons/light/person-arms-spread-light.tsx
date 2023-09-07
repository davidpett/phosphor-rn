import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPersonArmsSpreadLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 70a30 30 0 1 0-30-30 30 30 0 0 0 30 30Zm0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm101.55 66.14A17.66 17.66 0 0 0 212 74H44a18 18 0 0 0-7.55 34.34h.1l52.32 23-21.44 81.5A18 18 0 0 0 84 238a18.07 18.07 0 0 0 16.19-10.14L128 180l27.81 47.91a18 18 0 0 0 32.73-14.94l-21.44-81.5 52.32-23h.1a17.66 17.66 0 0 0 10.03-20.33Zm-15 9.29-56.95 25.08a6 6 0 0 0-3.39 7l22.87 86.93a7.66 7.66 0 0 0 .37 1 6 6 0 0 1-10.88 5.07 4.3 4.3 0 0 0-.24-.48L133.19 165a6 6 0 0 0-10.38 0l-33.12 57.05c-.09.16-.17.31-.25.48a6 6 0 0 1-8 2.9 6 6 0 0 1-2.9-8 7.66 7.66 0 0 0 .37-1l22.87-86.93a6 6 0 0 0-3.39-7L41.47 97.43A6 6 0 0 1 44 86h168a6 6 0 0 1 2.56 11.43Z" />
  </Svg>
);
const Memo = memo(SvgPersonArmsSpreadLight);
export default Memo;
