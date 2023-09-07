import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionBackgroundFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 112h72v72H72Zm152-64v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM96 72a8 8 0 0 0 16 0h16a8 8 0 0 0 0-16h-16a16 16 0 0 0-16 16Zm64 40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h72a16 16 0 0 0 16-16Zm40 16a8 8 0 0 0-16 0v16a8 8 0 0 0 0 16 16 16 0 0 0 16-16Zm0-56a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0Z" />
  </Svg>
);
const Memo = memo(SvgSelectionBackgroundFill);
export default Memo;
