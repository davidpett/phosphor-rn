import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoundingBoxDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v32a8 8 0 0 1-8 8h-32a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8ZM80 40H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Zm128 128h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8Zm-128 0H48a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M208 96a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v64h-8a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-8V96Zm-32-48h32v32h-32ZM48 48h32v15.9a.51.51 0 0 0 0 .2V80H48Zm32 160H48v-32h32v15.9a.51.51 0 0 0 0 .2V208Zm128 0h-32v-32h32Zm-24-48h-8a16 16 0 0 0-16 16v8H96v-8a16 16 0 0 0-16-16h-8V96h8a16 16 0 0 0 16-16v-8h64v8a16 16 0 0 0 16 16h8Z" />
  </Svg>
);
const Memo = memo(SvgBoundingBoxDuotone);
export default Memo;
