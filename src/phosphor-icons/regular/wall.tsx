import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWall = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8ZM88 144v-32h80v32Zm-48 0v-32h32v32Zm144-32h32v32h-32Zm32-16h-80V64h80Zm-96-32v32H40V64Zm-80 96h80v32H40Zm96 32v-32h80v32Z" />
  </Svg>
);
const Memo = memo(SvgWall);
export default Memo;
