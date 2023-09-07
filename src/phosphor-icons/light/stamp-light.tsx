import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStampLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 224a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6Zm0-80v40a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14v-40a14 14 0 0 1 14-14h58.9L90.68 54.29A30 30 0 0 1 120 18h16a30 30 0 0 1 29.33 36.29L149.1 130H208a14 14 0 0 1 14 14Zm-102.83-14h17.66l16.76-78.23A18 18 0 0 0 136 30h-16a18 18 0 0 0-17.6 21.77ZM210 144a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgStampLight);
export default Memo;
