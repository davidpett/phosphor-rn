import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEqualizerDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M24 128h48v64H24Zm80 64h48v-32h-48Zm80-96v96h48V96Z"
      opacity={0.2}
    />
    <Path d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm72 24h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm32-48h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16ZM80 128v64a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-16 8H32v48h32Zm96 24v32a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-16 8h-32v16h32Zm96-72v96a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm-16 8h-32v80h32Z" />
  </Svg>
);
const Memo = memo(SvgEqualizerDuotone);
export default Memo;
