import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodaLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 84a43.82 43.82 0 0 1 23.69 6.73A8 8 0 0 0 212 84V48a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-36a8 8 0 0 0-12.28-6.75c-8 5.14-14.82 7.09-23.56 6.74H176a44 44 0 0 1 0-88Zm-52 44a52.05 52.05 0 0 0 51.92 52c10.35.4 18.76-2 28.08-8v36a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4v36a52.24 52.24 0 0 0-80 44Z" />
  </Svg>
);
const Memo = memo(SvgCodaLogoThin);
export default Memo;
