import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134 154.6V88a6 6 0 0 0-12 0v66.6a30 30 0 1 0 12 0Zm-6 47.4a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm38-67V48a38 38 0 0 0-76 0v87a62 62 0 1 0 76 0Zm-38 99a50 50 0 0 1-28.57-91 6 6 0 0 0 2.57-5V48a26 26 0 0 1 52 0v90a6 6 0 0 0 2.57 4.92A50 50 0 0 1 128 234Z" />
  </Svg>
);
const Memo = memo(SvgThermometerSimpleLight);
export default Memo;
