import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYoutubeLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m162.22 124.67-48-32A4 4 0 0 0 108 96v64a4 4 0 0 0 2.11 3.53 4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66ZM116 152.53v-49.06L152.79 128Zm114.46-82a20 20 0 0 0-12.06-13.68C184.6 43.79 130.27 44 128 44s-56.6-.21-90.4 12.85a20 20 0 0 0-12.06 13.67C23 80.27 20 98.16 20 128s3 47.73 5.54 57.48a20 20 0 0 0 12.06 13.67C71.4 212.21 125.73 212 128 212h.71c6.89 0 57.58-.43 89.72-12.85a20 20 0 0 0 12.06-13.67C233 175.72 236 157.84 236 128s-3-47.73-5.54-57.48Zm-7.74 113a12 12 0 0 1-7.21 8.22C183.14 204.19 128.57 204 128 204s-55.11.19-87.48-12.31a12 12 0 0 1-7.21-8.22C30.87 174.17 28 157 28 128s2.87-46.17 5.28-55.47a12 12 0 0 1 7.21-8.22C72.86 51.81 127.43 52 128 52s55.11-.2 87.48 12.31a12 12 0 0 1 7.21 8.22C225.13 81.83 228 99 228 128s-2.87 46.17-5.28 55.47Z" />
  </Svg>
);
const Memo = memo(SvgYoutubeLogoThin);
export default Memo;
