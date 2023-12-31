import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScrollDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 192a24 24 0 0 1-24 24H88a24 24 0 0 0 24-24c0-10-8-16-8-16h112s8 6 8 16Z"
      opacity={0.2}
    />
    <Path d="M96 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8Zm8 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16Zm128 48a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64a16 16 0 0 0-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0 1 24 88a7.89 7.89 0 0 1-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0 1 32-32h136a32 32 0 0 1 32 32v104h8a8 8 0 0 1 4.8 1.6c1.2.86 11.2 8.79 11.2 22.4ZM96.26 173.48A8.07 8.07 0 0 1 104 168h88V64a16 16 0 0 0-16-16H67.69A31.71 31.71 0 0 1 72 64v128a16 16 0 0 0 32 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 0 1-2.86-8.86ZM216 192a12.58 12.58 0 0 0-3.23-8h-94a26.92 26.92 0 0 1 1.21 8 31.82 31.82 0 0 1-4.29 16H200a16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgScrollDuotone);
export default Memo;
