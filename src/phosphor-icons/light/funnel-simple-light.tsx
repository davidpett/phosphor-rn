import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M198 128a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6Zm34-54H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12Zm-80 96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimpleLight);
export default Memo;
