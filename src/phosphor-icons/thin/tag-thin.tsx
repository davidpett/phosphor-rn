import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTagThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240.49 138.83-99.32-99.32a11.93 11.93 0 0 0-8.48-3.51H40a4 4 0 0 0-4 4v92.69a11.93 11.93 0 0 0 3.51 8.48l99.32 99.32a12 12 0 0 0 17 0l84.69-84.69a12 12 0 0 0 0-17Zm-5.66 11.31-84.69 84.69a4 4 0 0 1-5.65 0l-99.32-99.32a4 4 0 0 1-1.17-2.82V44h88.69a4 4 0 0 1 2.82 1.17l99.32 99.32a4 4 0 0 1 0 5.65ZM92 84a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgTagThin);
export default Memo;
