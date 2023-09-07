import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrendDownLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 136v64a6 6 0 0 1-6 6h-64a6 6 0 0 1 0-12h49.52L136 112.49l-35.76 35.75a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L96 135.51l35.76-35.75a6 6 0 0 1 8.48 0L226 185.52V136a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgTrendDownLight);
export default Memo;
