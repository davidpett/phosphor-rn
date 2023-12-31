import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTiltLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m183 113.65 30.1-28.32.13-.13a30 30 0 0 0-42.43-42.43l-.13.13L142.35 73l-84.3-30.65a6 6 0 0 0-6.29 1.39l-24 24a6 6 0 0 0 .91 9.26l65.92 43.94L77.52 138H56a6 6 0 0 0-4.24 1.76l-24 24a6 6 0 0 0 2 9.82l37.62 15 15 37.56v.12a6 6 0 0 0 7.81 3.27 5.94 5.94 0 0 0 2.07-1.41l23.91-23.91A6 6 0 0 0 118 200v-21.52l17.07-17.07L179 227.33a6 6 0 0 0 9.23.91l24-24a6 6 0 0 0 1.39-6.29Zm1.94 100.93L141 148.66a6 6 0 0 0-4.4-2.64h-.59a6 6 0 0 0-4.24 1.76l-24 24A6 6 0 0 0 106 176v21.52l-15.8 15.8-12.63-31.55a6 6 0 0 0-3.34-3.35L42.68 165.8 58.49 150H80a6 6 0 0 0 4.25-1.76l24-24a6 6 0 0 0-.92-9.23L41.42 71.06l16.12-16.13L142 85.63a6 6 0 0 0 6.42-1.53l31-32.9a18 18 0 0 1 25.38 25.46l-32.9 31a6 6 0 0 0-1.53 6.42l30.7 84.41Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTiltLight);
export default Memo;
