import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchMinusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 74h-86l-28.27-21.2a14 14 0 0 0-8.4-2.8H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14ZM38 64a2 2 0 0 1 2-2h53.33a2 2 0 0 1 1.2.4L118 80 94.53 97.6a2 2 0 0 1-1.2.4H38Zm180 136a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-90h55.33a14 14 0 0 0 8.4-2.8L130 86h86a2 2 0 0 1 2 2Zm-60-48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchMinusLight);
export default Memo;
