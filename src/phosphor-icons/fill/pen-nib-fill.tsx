import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenNibFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.31 89.36-68.68-68.68a16 16 0 0 0-22.63 0l-28.44 28.44-58 21.76a16 16 0 0 0-10.2 12.35l-20.77 124.6a4 4 0 0 0 6.77 3.49l57-57a23.85 23.85 0 0 1-2.29-12.08 24 24 0 1 1 13.6 23.4l-57 57a4 4 0 0 0 3.49 6.77l124.61-20.77a16 16 0 0 0 12.35-10.16l21.77-58.07L235.31 112a16 16 0 0 0 0-22.63ZM200 124.68 131.32 56l24-24L224 100.68Z" />
  </Svg>
);
const Memo = memo(SvgPenNibFill);
export default Memo;
