import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeBlockLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m59.76 100.24-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 1 1 8.48 8.48L40.49 64l27.75 27.76a6 6 0 1 1-8.48 8.48Zm40 0a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48l-32-32a6 6 0 1 0-8.48 8.48L127.51 64 99.76 91.76a6 6 0 0 0 0 8.48ZM200 42h-24a6 6 0 0 0 0 12h24a2 2 0 0 1 2 2v144a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-64a6 6 0 0 0-12 0v64a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Z" />
  </Svg>
);
const Memo = memo(SvgCodeBlockLight);
export default Memo;
