import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgApplePodcastsLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M154.2 138.33a32 32 0 1 0-52.4 0 24.27 24.27 0 0 0-8.76 7 23.68 23.68 0 0 0-4.3 20.49l12.18 48A24.18 24.18 0 0 0 124.44 232h7.12a24.18 24.18 0 0 0 23.52-18.15l12.18-48a23.68 23.68 0 0 0-4.3-20.49 24.27 24.27 0 0 0-8.76-7.03ZM128 104a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm23.75 57.91-12.18 48a8.18 8.18 0 0 1-8 6.09h-7.12a8.18 8.18 0 0 1-8-6.09l-12.18-48a7.71 7.71 0 0 1 1.42-6.73 8.26 8.26 0 0 1 6.58-3.18h31.5a8.26 8.26 0 0 1 6.58 3.18 7.71 7.71 0 0 1 1.4 6.73ZM72 128a56.27 56.27 0 0 0 1.76 14 8 8 0 1 1-15.49 4 72 72 0 1 1 139.46 0 8 8 0 0 1-7.74 6 8.12 8.12 0 0 1-2-.25 8 8 0 0 1-5.75-9.74A56 56 0 1 0 72 128Zm160 0a103.86 103.86 0 0 1-46.49 86.66 8 8 0 0 1-8.86-13.32 88 88 0 1 0-97.31 0A8 8 0 0 1 74.91 216a7.92 7.92 0 0 1-4.42-1.34A104 104 0 1 1 232 128Z" />
  </Svg>
);
const Memo = memo(SvgApplePodcastsLogo);
export default Memo;
