import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBinocularsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M233 147.24 191.43 52.6a6 6 0 0 0-1.25-1.83 30 30 0 0 0-42.42 0A6 6 0 0 0 146 55v27h-36V55a6 6 0 0 0-1.76-4.25 30 30 0 0 0-42.42 0 6 6 0 0 0-1.25 1.83L23 147.24A46 46 0 1 0 110 168V94h36v74a46 46 0 1 0 87-20.76ZM64 202a34 34 0 1 1 34-34 34 34 0 0 1-34 34Zm0-80a45.77 45.77 0 0 0-18.55 3.92l29.61-67.38A18 18 0 0 1 98 57.71V137a45.89 45.89 0 0 0-34-15Zm94-64.28a18 18 0 0 1 22.94.83l29.61 67.37A45.9 45.9 0 0 0 158 137ZM192 202a34 34 0 1 1 34-34 34 34 0 0 1-34 34Z" />
  </Svg>
);
const Memo = memo(SvgBinocularsLight);
export default Memo;
