import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGridNineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M84 52v40H28a4 4 0 0 1-4-4V64a16 16 0 0 1 16-16h40a4 4 0 0 1 4 4Zm16 152a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4v-40h-56Zm-76-36v24a16 16 0 0 0 16 16h40a4 4 0 0 0 4-4v-40H28a4 4 0 0 0-4 4Zm0-56v32a4 4 0 0 0 4 4h56v-40H28a4 4 0 0 0-4 4Zm128-64h-48a4 4 0 0 0-4 4v40h56V52a4 4 0 0 0-4-4Zm76 60h-56v40h56a4 4 0 0 0 4-4v-32a4 4 0 0 0-4-4Zm-128 40h56v-40h-56ZM216 48h-40a4 4 0 0 0-4 4v40h56a4 4 0 0 0 4-4V64a16 16 0 0 0-16-16Zm12 116h-56v40a4 4 0 0 0 4 4h40a16 16 0 0 0 16-16v-24a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgGridNineFill);
export default Memo;
