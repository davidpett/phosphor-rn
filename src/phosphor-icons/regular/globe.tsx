import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobe = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm-26.37 144h52.74C149 186.34 140 202.87 128 215.89c-12-13.02-21-29.55-26.37-47.89ZM98 152a145.72 145.72 0 0 1 0-48h60a145.72 145.72 0 0 1 0 48Zm-58-24a87.61 87.61 0 0 1 3.33-24h38.46a161.79 161.79 0 0 0 0 48H43.33A87.61 87.61 0 0 1 40 128Zm114.37-40h-52.74C107 69.66 116 53.13 128 40.11c12 13.02 21 29.55 26.37 47.89Zm19.84 16h38.46a88.15 88.15 0 0 1 0 48h-38.46a161.79 161.79 0 0 0 0-48Zm32.16-16h-35.43a142.39 142.39 0 0 0-20.26-45 88.37 88.37 0 0 1 55.69 45ZM105.32 43a142.39 142.39 0 0 0-20.26 45H49.63a88.37 88.37 0 0 1 55.69-45ZM49.63 168h35.43a142.39 142.39 0 0 0 20.26 45 88.37 88.37 0 0 1-55.69-45Zm101.05 45a142.39 142.39 0 0 0 20.26-45h35.43a88.37 88.37 0 0 1-55.69 45Z" />
  </Svg>
);
const Memo = memo(SvgGlobe);
export default Memo;
