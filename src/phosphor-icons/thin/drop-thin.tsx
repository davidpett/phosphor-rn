import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M171 50.38a250 250 0 0 0-40.73-37.66 4 4 0 0 0-4.58 0A250 250 0 0 0 85 50.38C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.62ZM128 220a76.08 76.08 0 0 1-76-76c0-35.9 21.15-67.8 38.9-88.24A255 255 0 0 1 128 21a255 255 0 0 1 37.1 34.8C182.85 76.2 204 108.1 204 144a76.08 76.08 0 0 1-76 76Zm51.94-67.33a53.51 53.51 0 0 1-43.28 43.27 3.68 3.68 0 0 1-.66.06 4 4 0 0 1-.66-7.94c18.18-3.06 33.63-18.51 36.72-36.73a4 4 0 0 1 7.88 1.34Z" />
  </Svg>
);
const Memo = memo(SvgDropThin);
export default Memo;
