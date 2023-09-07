import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorClickThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166.82 137.16a4 4 0 0 1 1.23-6.5l44.76-19.46a12 12 0 0 0-1.05-22.33L51.68 36.6A12 12 0 0 0 36.6 51.68l52.27 160.08a11.88 11.88 0 0 0 10.8 8.24h.59a11.85 11.85 0 0 0 10.94-7.19l19.46-44.76a4 4 0 0 1 6.5-1.23l49.67 49.67a12 12 0 0 0 17 0l12.69-12.69a12 12 0 0 0 0-17Zm44 61-12.69 12.69a4 4 0 0 1-5.65 0l-49.67-49.67a12 12 0 0 0-8.48-3.52 11.44 11.44 0 0 0-2.25.22 12 12 0 0 0-8.76 7l-19.46 44.76a4 4 0 0 1-7.39-.35L44.21 49.2a4 4 0 0 1 5-5l160.06 52.28a3.95 3.95 0 0 1 .35 7.38l-44.76 19.47a12 12 0 0 0-3.7 19.49l49.67 49.67a4 4 0 0 1 0 5.65ZM92 24v-8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0ZM12 96a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8h-8a4 4 0 0 1-4-4Zm112.42-65.79 8-16a4 4 0 0 1 7.16 3.58l-8 16a4 4 0 0 1-7.16-3.58Zm-88.84 96a4 4 0 0 1-1.79 5.37l-16 8A4.05 4.05 0 0 1 16 140a4 4 0 0 1-1.79-7.58l16-8a4 4 0 0 1 5.37 1.79Z" />
  </Svg>
);
const Memo = memo(SvgCursorClickThin);
export default Memo;
