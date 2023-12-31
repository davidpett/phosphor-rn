import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrainDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 72v56H48V72Z" opacity={0.2} />
    <Path d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32ZM56 120V80h64v40Zm80-40h64v40h-64ZM72 40h112a16 16 0 0 1 16 16v8H56v-8a16 16 0 0 1 16-16Zm112 160H72a16 16 0 0 1-16-16v-48h144v48a16 16 0 0 1-16 16Zm-88-28a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm88 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgTrainDuotone);
export default Memo;
