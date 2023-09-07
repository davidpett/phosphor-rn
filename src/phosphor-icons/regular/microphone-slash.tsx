import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.92 210.62-160-176a8 8 0 1 0-11.84 10.76L80 87.09V128a48 48 0 0 0 73.91 40.4l10.88 12A64 64 0 0 1 64 128a8 8 0 0 0-16 0 80.11 80.11 0 0 0 72 79.6V232a8 8 0 0 0 16 0v-24.41a79.74 79.74 0 0 0 39.62-15.31l26.46 29.1a8 8 0 1 0 11.84-10.76ZM128 160a32 32 0 0 1-32-32v-23.31l46.92 51.62A32 32 0 0 1 128 160ZM87.16 38.78A48 48 0 0 1 176 64v60.43a8 8 0 0 1-16 0V64a32 32 0 0 0-59.24-16.81 8 8 0 1 1-13.6-8.41Zm100.48 112.49A63.71 63.71 0 0 0 192 128a8 8 0 0 1 16 0 79.62 79.62 0 0 1-5.46 29.09 8 8 0 1 1-14.9-5.82Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneSlash);
export default Memo;
