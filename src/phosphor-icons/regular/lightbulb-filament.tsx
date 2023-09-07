import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLightbulbFilament = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.5c-.26-47.67 38.26-87.35 85.88-88.5A88 88 0 0 1 216 104Zm-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.64 71.64 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h24v-44.69l-29.66-29.65a8 8 0 0 1 11.32-11.32L128 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32L136 147.31V192h24v-6a32.12 32.12 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104Z" />
  </Svg>
);
const Memo = memo(SvgLightbulbFilament);
export default Memo;
