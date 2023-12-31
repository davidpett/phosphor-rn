import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGlobeStandBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 172a76 76 0 1 0-76-76 76.08 76.08 0 0 0 76 76Zm0-128a52 52 0 1 1-52 52 52.06 52.06 0 0 1 52-52Zm12 167.38V220h20a12 12 0 0 1 0 24H96a12 12 0 0 1 0-24h20v-8.62A116 116 0 0 1 12 97.12a115.3 115.3 0 0 1 32.29-81.43A12 12 0 1 1 61.6 32.31a92 92 0 0 0 130.09 130.08 12 12 0 1 1 16.62 17.31A115.12 115.12 0 0 1 140 211.38Z" />
  </Svg>
);
const Memo = memo(SvgGlobeStandBold);
export default Memo;
