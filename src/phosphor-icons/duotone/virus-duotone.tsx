import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVirusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 40a88 88 0 1 0 88 88 88 88 0 0 0-88-88Zm-20 88a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"
      opacity={0.2}
    />
    <Path d="M136 108a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm-28 12a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm68-8a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-32 64a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm96-56h-16.34a95.52 95.52 0 0 0-22.39-53.95l12.39-12.39a8 8 0 0 0-11.32-11.32L190 54.73a95.52 95.52 0 0 0-54-22.39V16a8 8 0 0 0-16 0v16.34a95.52 95.52 0 0 0-53.95 22.39L53.66 42.34a8 8 0 0 0-11.32 11.32l12.39 12.39a95.52 95.52 0 0 0-22.39 54H16a8 8 0 0 0 0 16h16.34A95.52 95.52 0 0 0 54.73 190l-12.39 12.34a8 8 0 0 0 11.32 11.32l12.39-12.39a95.52 95.52 0 0 0 54 22.39V240a8 8 0 0 0 16 0v-16.34A95.52 95.52 0 0 0 190 201.27l12.39 12.39a8 8 0 0 0 11.32-11.32L201.27 190a95.52 95.52 0 0 0 22.39-54H240a8 8 0 0 0 0-16Zm-112 88a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80Z" />
  </Svg>
);
const Memo = memo(SvgVirusDuotone);
export default Memo;
