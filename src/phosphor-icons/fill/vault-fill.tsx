import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVaultFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-8 96h-28.91a36 36 0 1 1 0-16H208a8 8 0 0 1 0 16Zm-44-8a20 20 0 1 1-20-20 20 20 0 0 1 20 20Z" />
  </Svg>
);
const Memo = memo(SvgVaultFill);
export default Memo;
