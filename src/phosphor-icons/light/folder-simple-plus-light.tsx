import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimplePlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 74h-85.33a2 2 0 0 1-1.2-.4l-27.74-20.8a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176.89A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14Zm2 126.89a1.11 1.11 0 0 1-1.11 1.11H40a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4l27.74 20.8a14 14 0 0 0 8.4 2.8H216a2 2 0 0 1 2 2ZM158 144a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimplePlusLight);
export default Memo;
