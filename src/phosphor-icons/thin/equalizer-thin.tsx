import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEqualizerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M76 96a4 4 0 0 1-4 4H24a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Zm-4 28H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32H24a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm80-64h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm80-96h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm-48-24h48a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8Zm48 56h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Zm0 32h-48a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgEqualizerThin);
export default Memo;
