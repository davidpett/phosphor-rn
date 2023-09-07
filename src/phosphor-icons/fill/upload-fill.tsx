import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUploadFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M74.34 77.66a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L136 43.31V128a8 8 0 0 1-16 0V43.31L85.66 77.66a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h68a4 4 0 0 1 4 4v3.46c0 13.45 11 24.79 24.46 24.54A24 24 0 0 0 152 128v-4a4 4 0 0 1 4-4h68a16 16 0 0 1 16 16Zm-40 32a12 12 0 1 0-12 12 12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgUploadFill);
export default Memo;
