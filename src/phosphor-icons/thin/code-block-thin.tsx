import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeBlockThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m61.17 98.83-32-32a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 5.66L37.66 64l29.17 29.17a4 4 0 0 1-5.66 5.66Zm40 0a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0 0-5.66l-32-32a4 4 0 0 0-5.66 5.66L130.34 64l-29.17 29.17a4 4 0 0 0 0 5.66ZM200 44h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v144a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-64a4 4 0 0 0-8 0v64a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgCodeBlockThin);
export default Memo;
