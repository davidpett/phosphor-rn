import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareNetworkBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 156a43.78 43.78 0 0 0-29.09 11l-40.81-26.2a44.07 44.07 0 0 0 0-25.6L146.91 89a43.83 43.83 0 1 0-13-20.17L93.09 95a44 44 0 1 0 0 65.94l40.81 26.26A44 44 0 1 0 176 156Zm0-120a20 20 0 1 1-20 20 20 20 0 0 1 20-20ZM64 148a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm112 72a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgShareNetworkBold);
export default Memo;
