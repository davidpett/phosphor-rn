import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDetectiveThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 116h-30l-48.65-67a12 12 0 0 0-19-.51l-12.9 14.89-.1.12a12 12 0 0 1-18.7 0l-.1-.12-12.89-14.94a12 12 0 0 0-19 .51L38 116H8a4 4 0 0 0 0 8h240a4 4 0 0 0 0-8ZM93.13 53.65A4 4 0 0 1 96.26 52a4 4 0 0 1 3.2 1.5l.1.12 12.89 14.94A19.86 19.86 0 0 0 128 76a19.86 19.86 0 0 0 15.55-7.44l12.89-14.94.1-.12a4.06 4.06 0 0 1 3.2-1.5 4 4 0 0 1 3.13 1.65L208.15 116H47.85ZM180 148a32 32 0 0 0-32 32h-40a32 32 0 1 0-1 8h42a32 32 0 1 0 31-40ZM76 204a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm104 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgDetectiveThin);
export default Memo;
