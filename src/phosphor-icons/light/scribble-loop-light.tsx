import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScribbleLoopLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244.45 156c-1.32-1.46-24.27-26.42-61.37-40.5-1.5-18.49-8.13-35.31-19-48C149.74 50.8 129 42 104 42c-50.51 0-83.5 45.38-84.88 47.31a6 6 0 1 0 9.76 7C29.18 95.87 59.75 54 104 54c21.37 0 39 7.35 50.93 21.27 8.26 9.62 13.64 22.14 15.62 36.06a139 139 0 0 0-38-5.33c-25.58 0-47 6.65-62 19.22-13.1 11-20.62 26.34-20.62 42a45.65 45.65 0 0 0 13.28 32.64C72.56 209.12 85.47 214 100.6 214c51.73 0 80.55-43.09 82.68-85.38 32.05 13.49 52 35.09 52.27 35.4a6 6 0 0 0 8.9-8ZM153 177.53c-9.08 11.16-25.56 24.47-52.4 24.47C82 202 62 191.12 62 167.25 62 143.53 84.09 118 132.6 118a126.74 126.74 0 0 1 38.8 6.22c-.14 19.72-6.82 39.12-18.4 53.31Z" />
  </Svg>
);
const Memo = memo(SvgScribbleLoopLight);
export default Memo;
