import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSwordFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 32h-64a8 8 0 0 0-6.34 3.12l-64 83.21-9.66-9.64a16 16 0 0 0-22.64 0l-12.69 12.7a16 16 0 0 0 0 22.63l20 20-28 28a16 16 0 0 0 0 22.63l12.69 12.68a16 16 0 0 0 22.62 0l28-28 20 20a16 16 0 0 0 22.64 0l12.69-12.7a16 16 0 0 0 0-22.63l-9.64-9.64 83.21-64A8 8 0 0 0 224 104V40a8 8 0 0 0-8-8Zm-8 68.06-81.74 62.88L115.32 152l50.34-50.34a8 8 0 0 0-11.32-11.31L104 140.68l-10.93-10.94L155.94 48H208Z" />
  </Svg>
);
const Memo = memo(SvgSwordFill);
export default Memo;
