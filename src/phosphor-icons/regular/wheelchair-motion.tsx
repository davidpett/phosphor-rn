import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWheelchairMotion = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 80a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-48a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm-8 136a64 64 0 1 1-64-64 8 8 0 0 1 0 16 48 48 0 1 0 48 48 8 8 0 0 1 16 0Zm38.19-37.07a8 8 0 0 1 1.65 6.64l-16 80A8 8 0 0 1 184 224a7.77 7.77 0 0 1-1.58-.16 8 8 0 0 1-6.27-9.41L190.24 144H128a8 8 0 0 1-6.94-12l20.06-34.9a80.09 80.09 0 0 0-88 9.17A8 8 0 1 1 42.91 94a96 96 0 0 1 113.46-6.42 8 8 0 0 1 2.57 10.69L141.82 128H200a8 8 0 0 1 6.19 2.93Z" />
  </Svg>
);
const Memo = memo(SvgWheelchairMotion);
export default Memo;
