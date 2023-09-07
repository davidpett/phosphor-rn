import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileSvg = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M87.82 196.31a20.82 20.82 0 0 1-9.19 15.23C73.44 215 67 216 61.14 216A61.23 61.23 0 0 1 46 214a8 8 0 0 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55 20.55 0 0 1 9-14.95c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.14 1.09 1.12 1.9 2.31 1.49 6.44 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97ZM216 88v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 1 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.65 2.34l56 56A8 8 0 0 1 216 88Zm-56-8h28.69L160 51.31Zm-13.3 64.47a8 8 0 0 0-10.23 4.84L124 184.21l-12.47-34.9a8 8 0 1 0-15.06 5.38l20 56a8 8 0 0 0 15.07 0l20-56a8 8 0 0 0-4.84-10.22ZM208 176h-8a8 8 0 0 0 0 16v5.29a13.38 13.38 0 0 1-8 2.71c-8.82 0-16-9-16-20s7.18-20 16-20a13.27 13.27 0 0 1 7.53 2.38 8 8 0 0 0 8.95-13.26A29.38 29.38 0 0 0 192 144c-17.64 0-32 16.15-32 36s14.36 36 32 36a30.06 30.06 0 0 0 21.78-9.6 8 8 0 0 0 2.22-5.53V184a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgFileSvg);
export default Memo;
