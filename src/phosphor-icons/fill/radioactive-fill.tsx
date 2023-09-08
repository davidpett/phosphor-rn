import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioactiveFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 128a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm-18.34 5.65A8 8 0 0 0 100 128a28.11 28.11 0 0 1 13.83-24.15A8 8 0 0 0 116.7 93L90.75 48a16 16 0 0 0-23.1-5.07 103.83 103.83 0 0 0-43.58 75.49 16.21 16.21 0 0 0 4.17 12.37A16 16 0 0 0 40 136h52a8 8 0 0 0 5.66-2.35Zm55.27 21.53a8 8 0 0 0-10.93-2.92 28.05 28.05 0 0 1-28 0 8 8 0 0 0-10.93 2.93l-25.82 44.72a16 16 0 0 0 7.12 22.52 104.24 104.24 0 0 0 87.26 0 16 16 0 0 0 7.12-22.52Zm79-36.76a103.83 103.83 0 0 0-43.58-75.49 16 16 0 0 0-23.1 5.07L139.3 93a8 8 0 0 0 2.87 10.9A28 28 0 0 1 156 126.54v1.44a8 8 0 0 0 8 8h52a16 16 0 0 0 11.76-5.21 16.21 16.21 0 0 0 4.17-12.35Z" />
  </Svg>
);
const Memo = memo(SvgRadioactiveFill);
export default Memo;
