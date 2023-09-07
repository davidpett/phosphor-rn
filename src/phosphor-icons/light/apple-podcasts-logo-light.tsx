import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgApplePodcastsLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M151 139.2a30 30 0 1 0-46.06 0 22.14 22.14 0 0 0-10.35 7.39 21.68 21.68 0 0 0-3.94 18.77l12.18 48A22.17 22.17 0 0 0 124.44 230h7.12a22.17 22.17 0 0 0 21.58-16.64l12.18-48a21.68 21.68 0 0 0-3.94-18.77A22.14 22.14 0 0 0 151 139.2ZM128 102a18 18 0 1 1-18 18 18 18 0 0 1 18-18Zm25.69 60.4-12.18 48a10.19 10.19 0 0 1-9.95 7.6h-7.12a10.19 10.19 0 0 1-10-7.6l-12.18-48a9.75 9.75 0 0 1 1.78-8.44 10.25 10.25 0 0 1 8.16-4h31.5a10.25 10.25 0 0 1 8.16 4 9.75 9.75 0 0 1 1.83 8.44ZM186 128a58 58 0 1 0-114.17 14.5 6 6 0 0 1-11.62 3 70 70 0 1 1 135.58 0A6 6 0 0 1 190 150a5.93 5.93 0 0 1-1.5-.19 6 6 0 0 1-4.32-7.31A57.86 57.86 0 0 0 186 128Zm44 0a101.88 101.88 0 0 1-45.59 85 6 6 0 0 1-6.65-10 90 90 0 1 0-99.52 0 6 6 0 0 1-6.65 10A102 102 0 1 1 230 128Z" />
  </Svg>
);
const Memo = memo(SvgApplePodcastsLogoLight);
export default Memo;
