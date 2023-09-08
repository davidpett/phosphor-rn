import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGrains = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 56a87.53 87.53 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.12a8 8 0 0 0-7.16 0c-1.33.66-30.25 15.42-44.57 45.12A87.53 87.53 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8Zm-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.21 26.41-31.33 33.85-35.9 7.44 4.58 24.63 16.7 33.84 35.9A88.61 88.61 0 0 0 128 107.36a88.57 88.57 0 0 0-33.85-38.25ZM200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z" />
  </Svg>
);
const Memo = memo(SvgGrains);
export default Memo;
