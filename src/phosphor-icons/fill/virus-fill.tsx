import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVirusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 120h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16ZM80 108a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm48 84a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm48-48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgVirusFill);
export default Memo;
