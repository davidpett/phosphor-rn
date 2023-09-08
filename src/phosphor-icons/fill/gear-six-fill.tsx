import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGearSixFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.94 107.21a8 8 0 0 0-3.89-5.4l-29.83-17-.12-33.62a8 8 0 0 0-2.83-6.08 111.91 111.91 0 0 0-36.72-20.67 8 8 0 0 0-6.46.59L128 41.85 97.88 25a8 8 0 0 0-6.47-.6 111.92 111.92 0 0 0-36.68 20.75 8 8 0 0 0-2.83 6.07l-.15 33.65-29.83 17a8 8 0 0 0-3.89 5.4 106.47 106.47 0 0 0 0 41.56 8 8 0 0 0 3.89 5.4l29.83 17 .12 33.63a8 8 0 0 0 2.83 6.08 111.91 111.91 0 0 0 36.72 20.67 8 8 0 0 0 6.46-.59L128 214.15 158.12 231a7.91 7.91 0 0 0 3.9 1 8.09 8.09 0 0 0 2.57-.42 112.1 112.1 0 0 0 36.68-20.73 8 8 0 0 0 2.83-6.07l.15-33.65 29.83-17a8 8 0 0 0 3.89-5.4 106.47 106.47 0 0 0-.03-41.52ZM128 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgGearSixFill);
export default Memo;
