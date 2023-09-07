import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowArrowLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m244.24 75.76-32-32a6 6 0 0 0-8.48 8.48L225.51 74H192a72 72 0 0 0-27.51 6.55c-13.18 6.08-29.84 19.08-34.41 46.46-5.84 35-33 41.57-44.6 42.75a38 38 0 1 0 .08 12 69.61 69.61 0 0 0 21.76-5.57c13.17-5.86 29.86-18.8 34.6-47.21 7-42.26 48.34-43 50.08-43h33.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.46ZM48 202a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" />
  </Svg>
);
const Memo = memo(SvgFlowArrowLight);
export default Memo;
