import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenNibDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M120 56 60.32 78.38a8 8 0 0 0-5.08 6.17L32 224l139.45-23.24a8 8 0 0 0 6.17-5.08L200 136Zm-4 104a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z"
      opacity={0.2}
    />
    <Path d="M240 100.68a15.86 15.86 0 0 0-4.69-11.31l-68.68-68.69a16 16 0 0 0-22.63 0l-28.43 28.43-58 21.77a16.06 16.06 0 0 0-10.22 12.35L24.11 222.68A8 8 0 0 0 32 232a8.4 8.4 0 0 0 1.32-.11l139.44-23.24a16 16 0 0 0 12.35-10.17l21.77-58L235.31 112a15.87 15.87 0 0 0 4.69-11.32Zm-69.87 92.19L55.32 212l47.37-47.37a28 28 0 1 0-11.32-11.32L44 200.7 63.13 85.86 118 65.29 190.7 138ZM104 140a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm96-15.32L131.31 56l24-24L224 100.68Z" />
  </Svg>
);
const Memo = memo(SvgPenNibDuotone);
export default Memo;
