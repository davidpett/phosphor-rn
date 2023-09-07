import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWallLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 50H32a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h192a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6ZM86 146v-36h84v36Zm-48 0v-36h36v36Zm144-36h36v36h-36Zm36-12h-84V62h84Zm-96-36v36H38V62Zm-84 96h84v36H38Zm96 36v-36h84v36Z" />
  </Svg>
);
const Memo = memo(SvgWallLight);
export default Memo;
