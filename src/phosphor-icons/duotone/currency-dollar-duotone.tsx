import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyDollarDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 168a40 40 0 0 1-40 40h-24v-80h24a40 40 0 0 1 40 40ZM112 48a40 40 0 0 0 0 80h16V48Z"
      opacity={0.2}
    />
    <Path d="M152 120h-16V56h8a32 32 0 0 1 32 32 8 8 0 0 0 16 0 48.05 48.05 0 0 0-48-48h-8V24a8 8 0 0 0-16 0v16h-8a48 48 0 0 0 0 96h8v64h-16a32 32 0 0 1-32-32 8 8 0 0 0-16 0 48.05 48.05 0 0 0 48 48h16v16a8 8 0 0 0 16 0v-16h16a48 48 0 0 0 0-96Zm-40 0a32 32 0 0 1 0-64h8v64Zm40 80h-16v-64h16a32 32 0 0 1 0 64Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyDollarDuotone);
export default Memo;
