import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleHalfTiltThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M198.71 57.29A100 100 0 1 0 57.29 198.71 100 100 0 1 0 198.71 57.29ZM188 197.72a91.35 91.35 0 0 1-24 15v-115l24-24Zm-88-36.06 24-24v82.24a91.91 91.91 0 0 1-24-4.24Zm-8 51a91.69 91.69 0 0 1-26.15-16.89L92 169.66Zm40-83 24-24v110a91.76 91.76 0 0 1-24 4.24ZM36 128a92 92 0 0 1 154.16-67.81l-130 130A91.34 91.34 0 0 1 36 128Zm160 62V66a92 92 0 0 1 0 124Z" />
  </Svg>
);
const Memo = memo(SvgCircleHalfTiltThin);
export default Memo;
