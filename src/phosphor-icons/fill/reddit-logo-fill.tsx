import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRedditLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 104a32 32 0 0 0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17 17.72 2.72a24 24 0 1 0 2.87-15.74l-26-4a8 8 0 0 0-9.11 6.59l-6.87 41.48c-21.84.94-42.82 6.38-60.26 15.65a32 32 0 0 0-42.59 47.74A59 59 0 0 0 16 144c0 21.93 12 42.35 33.91 57.49C70.88 216 98.61 224 128 224s57.12-8 78.09-22.51C228 186.35 240 165.93 240 144a59 59 0 0 0-2.35-16.45A32.16 32.16 0 0 0 248 104Zm-64-80a8 8 0 1 1-8 8 8 8 0 0 1 8-8ZM72 128a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm91.75 55.07a76.18 76.18 0 0 1-71.5 0 8 8 0 1 1 7.5-14.14 60.18 60.18 0 0 0 56.5 0 8 8 0 1 1 7.5 14.14ZM168 144a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgRedditLogoFill);
export default Memo;
