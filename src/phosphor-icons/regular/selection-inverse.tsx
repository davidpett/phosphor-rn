import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionInverse = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 216a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8ZM40 152a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Zm32 56H48v-24a8 8 0 0 0-16 0v24a16 16 0 0 0 16 16h24a8 8 0 0 0 0-16ZM224 48v160a16 16 0 0 1-16 16h-24a8 8 0 0 1 0-16h12.69L48 59.31V72a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 0H59.31L208 196.69Z" />
  </Svg>
);
const Memo = memo(SvgSelectionInverse);
export default Memo;
