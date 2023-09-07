import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartLineDown = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V48a8 8 0 0 1 16 0v12.69l56 56 26.34-26.35a8 8 0 0 1 11.32 0L192 148.69V128a8 8 0 0 1 16 0v40a7 7 0 0 1 0 .8c0 .11 0 .21-.05.32s0 .3-.07.46a2.83 2.83 0 0 1-.09.37c0 .13-.06.26-.1.39s-.08.23-.12.35l-.14.39-.15.31c-.06.13-.12.27-.19.4s-.11.18-.16.28l-.24.39-.21.28-.26.35c-.11.14-.24.27-.36.4l-.16.18-.17.15a4.83 4.83 0 0 1-.42.37 3.92 3.92 0 0 1-.32.25l-.3.22-.38.23a2.91 2.91 0 0 1-.3.17l-.37.19-.34.15-.36.13a2.84 2.84 0 0 1-.38.13l-.36.1c-.14 0-.26.07-.4.09l-.42.07-.35.05a7 7 0 0 1-.79 0H160a8 8 0 0 1 0-16h20.69L128 107.31l-26.34 26.35a8 8 0 0 1-11.32 0L40 83.31V200h184a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChartLineDown);
export default Memo;
