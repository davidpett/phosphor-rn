import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareDownRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-48-96v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34L93.17 98.83a4 4 0 0 1 5.66-5.66L156 150.34V112a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareDownRightThin);
export default Memo;
