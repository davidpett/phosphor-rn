import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTargetBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.26 90.4a108 108 0 0 1-177.63 114A108 108 0 0 1 195.41 43.63l20.1-20.11a12 12 0 0 1 17 17l-96 96a12 12 0 1 1-17-17l24-24a36 36 0 1 0 19.76 39.65 12 12 0 0 1 23.53 4.74 60 60 0 1 1-25.73-62l17.23-17.17a84 84 0 1 0 28.46 38 12 12 0 1 1 22.5-8.35Z" />
  </Svg>
);
const Memo = memo(SvgTargetBold);
export default Memo;
