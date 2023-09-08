import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDnaDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M103.8 140.1 128 128l24.2 12.1a72 72 0 0 1 39.8 64.4v3.5H64v-3.5a72 72 0 0 1 39.8-64.4ZM192 51.5V48H64v3.5a72 72 0 0 0 39.8 64.4L128 128l24.2-12.1A72 72 0 0 0 192 51.5Z"
      opacity={0.2}
    />
    <Path d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5Zm-40-4.5H72.17a63.59 63.59 0 0 1 3.23-16h72.71a8 8 0 0 0 0-16H83.46a63.71 63.71 0 0 1 14.65-15.08A8 8 0 1 0 88.64 140 80.27 80.27 0 0 0 56 204.5V232a8 8 0 0 0 16 0v-16h88a8 8 0 0 0 0-16Zm32-184a8 8 0 0 0-8 8v16H96a8 8 0 0 0 0 16h87.83a63.59 63.59 0 0 1-3.23 16h-72.71a8 8 0 1 0 0 16h64.65a63.71 63.71 0 0 1-14.65 15.08 8 8 0 0 0 9.47 12.9A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgDnaDuotone);
export default Memo;
