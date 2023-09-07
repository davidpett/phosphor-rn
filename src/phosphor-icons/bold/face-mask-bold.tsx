import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFaceMaskBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M88 88h80a12 12 0 0 1 0 24H88a12 12 0 0 1 0-24Zm80 40H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24Zm88-24v24a36.05 36.05 0 0 1-36 36h-6.1c-6.46 13.92-18 26.18-34.19 36.24-19.14 11.86-39.34 17.4-47.13 19.23a20.05 20.05 0 0 1-9.16 0c-12-2.83-63.7-17-81.42-55.47h-6a36.05 36.05 0 0 1-36-36v-24a36.05 36.05 0 0 1 36-36h2.08a19.92 19.92 0 0 1 10.49-9.67l72-28.82a19.89 19.89 0 0 1 14.86 0l72 28.82A19.92 19.92 0 0 1 217.92 68H220a36.05 36.05 0 0 1 36 36ZM36.11 140c-.06-1.27-.11-2.55-.11-3.85V92a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12ZM196 79.55l-68-27.22-68 27.22v56.59c0 17.09 9.73 31.78 28.92 43.68 15.73 9.75 32.92 14.54 39.08 16.05 6.16-1.51 23.35-6.3 39.08-16.05 19.19-11.9 28.92-26.59 28.92-43.68ZM232 104a12 12 0 0 0-12-12v44.19c0 1.29 0 2.57-.12 3.85h.12a12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgFaceMaskBold);
export default Memo;
