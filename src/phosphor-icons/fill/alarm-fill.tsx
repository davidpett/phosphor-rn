import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlarmFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m61.66 29.66-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 1 1 11.32 11.32Zm176 20.68-32-32a8 8 0 0 0-11.32 11.32l32 32a8 8 0 0 0 11.32-11.32ZM224 128a96 96 0 1 1-96-96 96.11 96.11 0 0 1 96 96Zm-32 0a8 8 0 0 0-8-8h-48V72a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgAlarmFill);
export default Memo;
