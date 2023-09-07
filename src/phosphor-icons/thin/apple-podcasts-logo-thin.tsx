import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgApplePodcastsLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M147.26 140.3a28 28 0 1 0-38.52 0 20.12 20.12 0 0 0-12.54 7.52 19.67 19.67 0 0 0-3.58 17.05l12.18 48A20.17 20.17 0 0 0 124.44 228h7.12a20.17 20.17 0 0 0 19.64-15.13l12.18-48a19.67 19.67 0 0 0-3.58-17.05 20.12 20.12 0 0 0-12.54-7.52ZM108 120a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm47.63 42.9-12.18 48a12.19 12.19 0 0 1-11.89 9.1h-7.12a12.19 12.19 0 0 1-11.89-9.1l-12.18-48a11.76 11.76 0 0 1 2.14-10.17 12.24 12.24 0 0 1 9.74-4.73h31.5a12.24 12.24 0 0 1 9.74 4.73 11.76 11.76 0 0 1 2.14 10.17ZM188 128a60 60 0 1 0-118.11 15 4 4 0 0 1-7.75 2 68 68 0 1 1 131.72 0 4 4 0 0 1-3.87 3 3.81 3.81 0 0 1-1-.13 4 4 0 0 1-2.88-4.87 60.4 60.4 0 0 0 1.89-15Zm40 0a99.87 99.87 0 0 1-44.7 83.33 4 4 0 1 1-4.43-6.66 92 92 0 1 0-101.74 0 4 4 0 1 1-4.43 6.66A100 100 0 1 1 228 128Z" />
  </Svg>
);
const Memo = memo(SvgApplePodcastsLogoThin);
export default Memo;
