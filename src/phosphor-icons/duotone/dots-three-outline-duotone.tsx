import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeOutlineDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M152 128a24 24 0 1 1-24-24 24 24 0 0 1 24 24ZM48 104a24 24 0 1 0 24 24 24 24 0 0 0-24-24Zm160 0a24 24 0 1 0 24 24 24 24 0 0 0-24-24Z"
      opacity={0.2}
    />
    <Path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16ZM48 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm160-48a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeOutlineDuotone);
export default Memo;
