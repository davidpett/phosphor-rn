import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSwatchesLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M78 180a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm152-23.81V208a14 14 0 0 1-14 14H68a44.18 44.18 0 0 1-7.58-.65 42 42 0 0 1-33.81-48.64l25-143.13a13.94 13.94 0 0 1 16.21-11.36l54.67 9.72a14 14 0 0 1 11.3 16.21l-12.67 72.44 71-25.75a14 14 0 0 1 17.89 8.32l19.09 52.22a15.66 15.66 0 0 1 .9 4.81Zm-133.07 29L122 42.08a2 2 0 0 0-1.58-2.32L65.72 30h-.34a1.84 1.84 0 0 0-1.07.35 2 2 0 0 0-.82 1.3l-25 143.13a30 30 0 0 0 24.09 34.76 29.25 29.25 0 0 0 22-4.89 29.81 29.81 0 0 0 12.33-19.44Zm8.25 13.17L216.71 158a2 2 0 0 0 1.11-1 1.86 1.86 0 0 0 .06-1.46l-19.09-52.21a2 2 0 0 0-2.53-1.17l-77.53 28.09-10 57.07a41.9 41.9 0 0 1-3.55 11.06ZM218 170.27 108.35 210H216a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgSwatchesLight);
export default Memo;
