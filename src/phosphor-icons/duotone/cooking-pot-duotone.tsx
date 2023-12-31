import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookingPotDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 88v96a24 24 0 0 1-24 24H64a24 24 0 0 1-24-24V88a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M88 48V16a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm40 8a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm32 0a8 8 0 0 0 8-8V16a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm92.8 46.4L224 124v60a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-60L3.2 102.4a8 8 0 0 1 9.6-12.8L32 104V88a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v16l19.2-14.4a8 8 0 0 1 9.6 12.8ZM208 88H48v96a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgCookingPotDuotone);
export default Memo;
