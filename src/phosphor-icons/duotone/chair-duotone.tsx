import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChairDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M56 88V40a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8Zm152 56H48a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M208 136h-32v-32h16a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h16v32H48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h8v40a8 8 0 0 0 16 0v-40h112v40a8 8 0 0 0 16 0v-40h8a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16ZM64 40h128v48H64Zm32 64h64v32H96Zm112 64H48v-16h160v16Z" />
  </Svg>
);
const Memo = memo(SvgChairDuotone);
export default Memo;
