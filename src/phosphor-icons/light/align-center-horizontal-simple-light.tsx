import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 82h-74V48a6 6 0 0 0-12 0v34H48a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h74v34a6 6 0 0 0 12 0v-34h74a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14Zm2 78a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalSimpleLight);
export default Memo;
