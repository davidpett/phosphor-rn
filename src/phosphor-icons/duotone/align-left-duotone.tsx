import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M72 104V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8Zm144 40H80a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h136a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M216 136H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16Zm0 56H80v-40h136v40ZM48 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm32 80h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16Zm0-56h96v40H80Z" />
  </Svg>
);
const Memo = memo(SvgAlignLeftDuotone);
export default Memo;
