import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsSplitLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 188.24-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L186 201.51v-63l-58-58-58 58v63l21.76-21.75a6 6 0 0 1 8.48 8.48l-32 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48L58 201.51V136a6 6 0 0 1 1.76-4.24L122 69.51V24a6 6 0 0 1 12 0v45.51l62.24 62.25A6 6 0 0 1 198 136v65.51l21.76-21.75a6 6 0 0 1 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowsSplitLight);
export default Memo;
