import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStripeLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166 152c0 16.54-17.05 30-38 30s-38-13.46-38-30a6 6 0 0 1 12 0c0 9.76 11.91 18 26 18s26-8.24 26-18c0-11.21-10.7-15.1-28.33-20.18-15.89-4.58-33.89-9.77-33.89-27.82 0-17.1 15.57-30 36.22-30 15 0 27.74 6.88 33.34 18a6 6 0 0 1-10.71 5.42C147.08 90.36 138.41 86 128 86c-13.81 0-24.22 7.74-24.22 18 0 8.41 9.52 11.76 25.21 16.29C145.48 125 166 131 166 152Zm56-104v160a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgStripeLogoLight);
export default Memo;
