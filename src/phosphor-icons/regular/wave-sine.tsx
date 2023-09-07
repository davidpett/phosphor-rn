import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveSine = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.24 131.4c-22 46.8-41.4 68.6-61.2 68.6-25.1 0-40.73-33.32-57.28-68.6C107.7 103.56 92.9 72 78 72c-16.4 0-36.31 37.21-46.72 59.4a8 8 0 0 1-14.48-6.8C38.71 77.8 58.16 56 78 56c25.1 0 40.73 33.32 57.28 68.6C148.3 152.44 163.1 184 178 184c16.4 0 36.31-37.21 46.72-59.4a8 8 0 0 1 14.48 6.8Z" />
  </Svg>
);
const Memo = memo(SvgWaveSine);
export default Memo;
