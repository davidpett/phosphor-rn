import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSirenDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 129v39H48v-40a80 80 0 0 1 80.61-80c44.11.33 79.39 36.89 79.39 81Z"
      opacity={0.2}
    />
    <Path d="M120 16V8a8 8 0 0 1 16 0v8a8 8 0 0 1-16 0Zm80 32a8 8 0 0 0 5.66-2.34l8-8a8 8 0 0 0-11.32-11.32l-8 8A8 8 0 0 0 200 48ZM50.34 45.66a8 8 0 0 0 11.32-11.32l-8-8a8 8 0 0 0-11.32 11.32Zm87 26.45a8 8 0 1 0-2.64 15.78C153.67 91.08 168 108.32 168 128a8 8 0 0 0 16 0c0-27.4-20.07-51.43-46.68-55.89ZM232 176v24a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-24a16 16 0 0 1 16-16v-32a88 88 0 0 1 88-88h.68c48.15.36 87.33 40.29 87.33 89v31A16 16 0 0 1 232 176ZM56 160h144v-31c0-40-32.05-72.71-71.45-73H128a72 72 0 0 0-72 72Zm160 40v-24H40v24h176Z" />
  </Svg>
);
const Memo = memo(SvgSirenDuotone);
export default Memo;
