import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderMaleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 34h-48a6 6 0 0 0 0 12h33.52l-46.8 46.79a78 78 0 1 0 4.42 114.4 78.11 78.11 0 0 0 4.07-105.91L210 54.49V88a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6Zm-65.34 164.7a66 66 0 1 1 0-93.36 66.1 66.1 0 0 1 0 93.36Z" />
  </Svg>
);
const Memo = memo(SvgGenderMaleLight);
export default Memo;
