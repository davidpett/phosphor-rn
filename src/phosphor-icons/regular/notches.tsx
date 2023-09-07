import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotches = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 133.66-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32Zm-16-99.32a8 8 0 0 0-11.32 0l-152 152a8 8 0 0 0 11.32 11.32l152-152a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgNotches);
export default Memo;
