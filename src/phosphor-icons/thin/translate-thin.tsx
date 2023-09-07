import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTranslateThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.58 214.21-56-112a4 4 0 0 0-7.16 0L149.55 148A92.05 92.05 0 0 1 94 127.36 99.68 99.68 0 0 0 123.91 60H152a4 4 0 0 0 0-8H92V32a4 4 0 0 0-8 0v20H24a4 4 0 0 0 0 8h91.91A91.8 91.8 0 0 1 88 122.05a92 92 0 0 1-22.77-35.38 4 4 0 1 0-7.54 2.66 99.59 99.59 0 0 0 24.3 38A91.59 91.59 0 0 1 24 148a4 4 0 0 0 0 8 99.54 99.54 0 0 0 64-23.21 100.09 100.09 0 0 0 57.66 23l-29.22 58.43a4 4 0 0 0 7.16 3.58l14.87-29.8h75.06l14.89 29.79A4 4 0 0 0 232 220a4.12 4.12 0 0 0 1.79-.42 4 4 0 0 0 1.79-5.37ZM142.47 180 176 112.94 209.53 180Z" />
  </Svg>
);
const Memo = memo(SvgTranslateThin);
export default Memo;
