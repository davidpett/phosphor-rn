import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScales = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m239.43 133-32-80a8 8 0 0 0-9.16-4.84L136 62V40a8 8 0 0 0-16 0v25.58L54.26 80.19A8 8 0 0 0 48.57 85v.06l-32 79.94a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3L66.92 93.77 120 82v126h-16a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16h-16V78.42l51-11.32-26.43 65.9a7.92 7.92 0 0 0-.57 3c0 23.31 24.54 32 40 32s40-8.69 40-32a7.92 7.92 0 0 0-.57-3ZM56 184c-7.53 0-22.76-3.61-23.93-14.64L56 109.54l23.93 59.82C78.76 180.39 63.53 184 56 184Zm144-32c-7.53 0-22.76-3.61-23.93-14.64L200 77.54l23.93 59.82C222.76 148.39 207.53 152 200 152Z" />
  </Svg>
);
const Memo = memo(SvgScales);
export default Memo;
