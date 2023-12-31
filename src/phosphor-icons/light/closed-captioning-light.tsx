import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClosedCaptioningLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 50H32a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h192a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14Zm2 142a2 2 0 0 1-2 2H32a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h192a2 2 0 0 1 2 2Zm-108.81-39.29a6 6 0 0 1-2.19 8.2 38 38 0 1 1 0-65.82 6 6 0 1 1-6 10.38 26 26 0 1 0 0 45.05 6 6 0 0 1 8.19 2.19Zm80 0a6 6 0 0 1-2.19 8.2 38 38 0 1 1 0-65.82 6 6 0 1 1-6 10.38 26 26 0 1 0 0 45.05 6 6 0 0 1 8.19 2.19Z" />
  </Svg>
);
const Memo = memo(SvgClosedCaptioningLight);
export default Memo;
