import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimplePlusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 76h-85.33a4 4 0 0 1-2.4-.8l-27.74-20.8a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176.89A11.12 11.12 0 0 0 228 200.89V88a12 12 0 0 0-12-12Zm4 124.89a3.12 3.12 0 0 1-3.11 3.11H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l27.74 20.8a12.05 12.05 0 0 0 7.2 2.4H216a4 4 0 0 1 4 4ZM156 144a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimplePlusThin);
export default Memo;
