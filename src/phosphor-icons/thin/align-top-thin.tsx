import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignTopThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4Zm-16 40v96a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Zm-80 0v136a12 12 0 0 1-12 12H64a12 12 0 0 1-12-12V80a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H64a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgAlignTopThin);
export default Memo;
