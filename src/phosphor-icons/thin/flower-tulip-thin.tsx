import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowerTulipThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 52a83.5 83.5 0 0 0-37 8.62c-14.2-26.46-40-39.63-41.19-40.2a4 4 0 0 0-3.58 0c-1.14.57-27 13.74-41.19 40.2A83.5 83.5 0 0 0 48 52a4 4 0 0 0-4 4v40a84.1 84.1 0 0 0 80 83.9v45.63l-42.21-21.11a4 4 0 1 0-3.58 7.16l48 24a4 4 0 0 0 3.58 0l48-24a4 4 0 0 0-3.58-7.16L132 225.53V179.9A84.1 84.1 0 0 0 212 96V56a4 4 0 0 0-4-4Zm-80-23.44c5.91 3.37 25 15.45 36 35.93a84.46 84.46 0 0 0-36 45.92 84.46 84.46 0 0 0-36-45.92c11-20.42 30.1-32.55 36-35.93ZM52 96V60.1a76.11 76.11 0 0 1 72 75.9v35.9A76.11 76.11 0 0 1 52 96Zm152 0a76.11 76.11 0 0 1-72 75.9V136a76.11 76.11 0 0 1 72-75.9Z" />
  </Svg>
);
const Memo = memo(SvgFlowerTulipThin);
export default Memo;
