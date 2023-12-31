import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStackSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240 104-112 64-112-64 112-64Z" opacity={0.2} />
    <Path d="m12 111 112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9Zm116-61.79L223.87 104 128 158.79 32.13 104ZM247 140a8 8 0 0 1-3 11l-112 64a8 8 0 0 1-7.94 0L12 151a8 8 0 1 1 8-13.95l108 61.74 108-61.74a8 8 0 0 1 11 2.95Z" />
  </Svg>
);
const Memo = memo(SvgStackSimpleDuotone);
export default Memo;
