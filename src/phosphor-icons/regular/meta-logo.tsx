import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMetaLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 149.31c0 16.11-3.17 29.89-9.17 39.84-7.43 12.33-19 18.85-33.39 18.85-27.94 0-47.78-37-68.78-76.22C111.64 100 92.35 64 74 64c-9.38 0-19.94 10-28.25 26.67A138.18 138.18 0 0 0 32 149.31c0 13.2 2.38 24.12 6.88 31.58S49.82 192 58.56 192c15.12 0 30.85-24.54 44.23-48.55a8 8 0 0 1 14 7.8C101.46 178.71 83.07 208 58.56 208c-14.41 0-26-6.52-33.39-18.85-6-10-9.17-23.73-9.17-39.84a154.81 154.81 0 0 1 15.42-65.77C42.82 60.62 57.94 48 74 48c27.94 0 47.77 37 68.78 76.22C159.79 156 179.08 192 197.44 192c8.74 0 15.18-3.63 19.68-11.11s6.88-18.38 6.88-31.58a138.18 138.18 0 0 0-13.74-58.64C202 74 191.39 64 182 64c-8.36 0-17.68 7.48-28.51 22.88a8 8 0 1 1-13.08-9.21c9-12.74 23-29.67 41.59-29.67 16.05 0 31.17 12.62 42.57 35.54A154.81 154.81 0 0 1 240 149.31Z" />
  </Svg>
);
const Memo = memo(SvgMetaLogo);
export default Memo;
