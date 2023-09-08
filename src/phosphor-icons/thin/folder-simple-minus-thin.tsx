import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleMinusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 144a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4Zm72-56v112.89A11.12 11.12 0 0 1 216.89 212H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4v136a4 4 0 0 0 4 4h176.89a3.12 3.12 0 0 0 3.11-3.11Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleMinusThin);
export default Memo;
