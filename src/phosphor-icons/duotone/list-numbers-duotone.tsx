import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListNumbersDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 64v128H104V64Z" opacity={0.2} />
    <Path d="M224 128a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8ZM104 72h112a8 8 0 0 0 0-16H104a8 8 0 0 0 0 16Zm112 112H104a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16ZM43.58 55.16 48 52.94V104a8 8 0 0 0 16 0V40a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32Zm36.19 101.56a23.73 23.73 0 0 0-9.6-15.95 24.86 24.86 0 0 0-34.11 4.7 23.63 23.63 0 0 0-3.57 6.46 8 8 0 1 0 15 5.47 7.84 7.84 0 0 1 1.18-2.13 8.76 8.76 0 0 1 12-1.59 7.91 7.91 0 0 1 3.26 5.32 7.64 7.64 0 0 1-1.57 5.78 1 1 0 0 0-.08.11l-28.69 38.32A8 8 0 0 0 40 216h32a8 8 0 0 0 0-16H56l19.08-25.53a23.47 23.47 0 0 0 4.69-17.75Z" />
  </Svg>
);
const Memo = memo(SvgListNumbersDuotone);
export default Memo;
