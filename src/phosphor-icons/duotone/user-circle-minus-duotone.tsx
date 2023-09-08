import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleMinusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40 40 40 0 0 0 40 40 72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
      opacity={0.2}
    />
    <Path d="M168 56a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Zm62.56 54.68a103.92 103.92 0 1 1-85.24-85.24 8 8 0 0 1-2.64 15.78A88.07 88.07 0 0 0 40 128a87.62 87.62 0 0 0 22.24 58.41 79.66 79.66 0 0 1 36.06-28.75 48 48 0 1 1 59.4 0 79.66 79.66 0 0 1 36.06 28.75A87.62 87.62 0 0 0 216 128a88.85 88.85 0 0 0-1.22-14.68 8 8 0 1 1 15.78-2.64ZM128 152a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0 64a87.57 87.57 0 0 0 53.92-18.5 64 64 0 0 0-107.84 0A87.57 87.57 0 0 0 128 216Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleMinusDuotone);
export default Memo;
