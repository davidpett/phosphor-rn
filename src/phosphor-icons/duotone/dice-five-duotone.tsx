import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiceFiveDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 64v128a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h128a24 24 0 0 1 24 24Z"
      opacity={0.2}
    />
    <Path d="M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm16 160a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h128a16 16 0 0 1 16 16ZM104 92a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm72 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-72 72a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm36-36a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm36 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgDiceFiveDuotone);
export default Memo;
