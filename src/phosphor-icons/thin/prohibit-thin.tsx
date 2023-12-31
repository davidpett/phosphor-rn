import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProhibitThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm92 100a91.67 91.67 0 0 1-24.21 62.13L65.87 60.21A92 92 0 0 1 220 128Zm-184 0a91.67 91.67 0 0 1 24.21-62.13l129.92 129.92A92 92 0 0 1 36 128Z" />
  </Svg>
);
const Memo = memo(SvgProhibitThin);
export default Memo;
