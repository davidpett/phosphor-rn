import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneStageThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 20a68.08 68.08 0 0 0-68 68 67.19 67.19 0 0 0 .82 10.49l-70.48 96.1a11.94 11.94 0 0 0 1.2 15.58l14.29 14.3a11.95 11.95 0 0 0 15.58 1.19l96.11-70.48A68 68 0 1 0 168 20Zm60 68a59.7 59.7 0 0 1-14.87 39.47l-84.59-84.6A59.94 59.94 0 0 1 228 88ZM56.68 219.21a4 4 0 0 1-5.2-.4l-14.29-14.29a4 4 0 0 1-.4-5.2l66.46-90.62a68.31 68.31 0 0 0 44.05 44.05ZM108 88a59.77 59.77 0 0 1 14.87-39.47l84.6 84.6A60 60 0 0 1 108 88Zm-1.17 61.17a4 4 0 0 1 0 5.65l-8 8a4 4 0 1 1-5.65-5.65l8-8a4 4 0 0 1 5.66-.01Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneStageThin);
export default Memo;
