import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpinnerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 32v32a4 4 0 0 1-8 0V32a4 4 0 0 1 8 0Zm41.25 54.75a4 4 0 0 0 2.83-1.18L198.71 63a4 4 0 0 0-5.66-5.66l-22.62 22.58a4 4 0 0 0 2.82 6.83ZM224 124h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm-47.92 46.43a4 4 0 1 0-5.65 5.65l22.62 22.63a4 4 0 0 0 5.66-5.66ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm-48.08-17.57-22.63 22.62a4 4 0 0 0 5.71 5.66l22.62-22.63a4 4 0 1 0-5.65-5.65ZM68 128a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h32a4 4 0 0 0 4-4Zm-5-70.71A4 4 0 0 0 57.29 63l22.63 22.57a4 4 0 1 0 5.65-5.65Z" />
  </Svg>
);
const Memo = memo(SvgSpinnerThin);
export default Memo;
