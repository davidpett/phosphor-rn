import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNavigationArrowLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228.65 100.1 52.72 34.83h-.13a14 14 0 0 0-17.81 17.76s0 .09 0 .13l65.32 175.93a13.77 13.77 0 0 0 13.18 9.35h.26a13.8 13.8 0 0 0 13.14-9.88l23.56-76.56a2 2 0 0 1 1.32-1.32l76.56-23.56a14 14 0 0 0 .53-26.58Zm-4.06 15.11L148 138.77a14 14 0 0 0-9.26 9.26l-23.56 76.56a1.86 1.86 0 0 1-1.88 1.41 1.82 1.82 0 0 1-1.92-1.35.61.61 0 0 0 0-.12L46.11 48.62a2 2 0 0 1 2.51-2.51l175.91 65.26h.12a2 2 0 0 1-.06 3.8Z" />
  </Svg>
);
const Memo = memo(SvgNavigationArrowLight);
export default Memo;
