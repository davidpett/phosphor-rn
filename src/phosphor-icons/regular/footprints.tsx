import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFootprints = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208.06 184H152a8 8 0 0 0-8 8v12a36 36 0 0 0 72.05 0v-12a8 8 0 0 0-7.99-8Zm-8 20a20 20 0 0 1-40 0v-4h40ZM104 160H48a8 8 0 0 0-8 8v12a36 36 0 0 0 72 0v-12a8 8 0 0 0-8-8Zm-8 20a20 20 0 0 1-40 0v-4h40ZM76 16c-11.64 0-22.93 10.31-31.8 29-13.93 29.38-18.56 73 .29 96a8 8 0 0 0 6.2 2.93h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C98.85 26.31 87.57 16 76 16Zm21.15 112H54.78c-11.4-18.1-7.21-52.7 3.89-76.11C65.14 38.22 72.17 32 76 32s10.82 6.22 17.3 19.89c11.06 23.41 15.25 58.01 3.85 76.11Zm57.61 40h50.55a8 8 0 0 0 6.2-2.93c18.85-23 14.22-66.65.29-96C202.93 50.31 191.64 40 180 40s-22.89 10.31-31.77 29c-13.93 29.38-18.56 73 .29 96a8.05 8.05 0 0 0 6.24 3Zm8-92.11C169.22 62.22 176.25 56 180 56s10.82 6.22 17.29 19.89c11.1 23.41 15.29 58 3.9 76.11h-42.34c-11.4-18.1-7.21-52.7 3.89-76.11Z" />
  </Svg>
);
const Memo = memo(SvgFootprints);
export default Memo;
