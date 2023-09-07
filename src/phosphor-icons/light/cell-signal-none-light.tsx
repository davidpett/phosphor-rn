import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalNoneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M46 192v8a6 6 0 0 1-12 0v-8a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalNoneLight);
export default Memo;
