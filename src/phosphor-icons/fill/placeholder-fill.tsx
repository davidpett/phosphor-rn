import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlaceholderFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-20.69 155.31a8 8 0 0 1-11.31 0L68.69 80A8 8 0 0 1 80 68.69L187.31 176a8 8 0 0 1 0 11.31Z" />
  </Svg>
);
const Memo = memo(SvgPlaceholderFill);
export default Memo;
