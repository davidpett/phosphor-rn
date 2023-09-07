import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpadeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 136a48 48 0 0 1-79.55 36.18L160 224H96l15.55-51.82A48 48 0 0 1 32 136c0-64 96-112 96-112s96 48 96 112Z"
      opacity={0.2}
    />
    <Path d="M131.58 16.85a8 8 0 0 0-7.16 0C120.32 18.9 24 67.84 24 136a56 56 0 0 0 74.15 53l-9.81 32.7A8 8 0 0 0 96 232h64a8 8 0 0 0 7.66-10.3l-9.81-32.7A56 56 0 0 0 232 136c0-68.16-96.32-117.1-100.42-119.15ZM176 176a40 40 0 0 1-26.29-9.85 8 8 0 0 0-12.92 8.33L149.25 216h-42.5l12.46-41.52a8 8 0 0 0-12.92-8.33A40 40 0 0 1 40 136c0-29.88 24.41-56.55 44.89-73.66A279.13 279.13 0 0 1 128 33.06a279.13 279.13 0 0 1 43.11 29.28c37.1 31 44.89 57.17 44.89 73.66a40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgSpadeDuotone);
export default Memo;
