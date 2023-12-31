import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBuildingsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 212h-20V96a12 12 0 0 0-12-12h-68V32a12 12 0 0 0-18.66-10l-80 53.33a12 12 0 0 0-5.34 10V212H16a4 4 0 0 0 0 8h224a4 4 0 0 0 0-8ZM208 92a4 4 0 0 1 4 4v116h-72V92ZM44 85.34A4 4 0 0 1 45.78 82l80-53.33A4 4 0 0 1 132 32v180H44ZM108 112v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Zm-32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Zm0 56v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Zm32 0v16a4 4 0 0 1-8 0v-16a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgBuildingsThin);
export default Memo;
