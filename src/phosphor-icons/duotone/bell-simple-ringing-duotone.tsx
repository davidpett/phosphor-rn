import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleRingingDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 147.81 56 112a72 72 0 0 1 144 0c0 35.82 8.3 56.6 14.9 68a8 8 0 0 1-6.9 12Z"
      opacity={0.2}
    />
    <Path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm59.39-163.68a111.36 111.36 0 0 0-39.12-43.08 8 8 0 1 0-8.54 13.53 94.13 94.13 0 0 1 33.46 36.91 8 8 0 0 0 14.2-7.36ZM35.71 72a8 8 0 0 0 7.1-4.32 94.13 94.13 0 0 1 33.46-36.91 8 8 0 1 0-8.54-13.53 111.36 111.36 0 0 0-39.12 43.08A8 8 0 0 0 35.71 72Zm186.1 103.94A16 16 0 0 1 208 200H48a16 16 0 0 1-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 0 1 160 0c0 26.27 4.78 48.38 13.81 63.94ZM208 184c-10.64-18.27-16-42.49-16-72a64 64 0 0 0-128 0c0 29.52-5.38 53.74-16 72Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleRingingDuotone);
export default Memo;
