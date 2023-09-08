import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleMinusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M170 56a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6Zm58.59 55A101.9 101.9 0 1 1 145 27.41a6 6 0 1 1-2 11.83A91.66 91.66 0 0 0 128 38a89.95 89.95 0 0 0-65.51 151.64 77.53 77.53 0 0 1 40-31.38 46 46 0 1 1 51 0 77.53 77.53 0 0 1 40 31.38A89.65 89.65 0 0 0 218 128a91.76 91.76 0 0 0-1.24-15 6 6 0 1 1 11.83-2ZM128 154a34 34 0 1 0-34-34 34 34 0 0 0 34 34Zm0 64a89.58 89.58 0 0 0 56.56-20 66 66 0 0 0-113.12 0A89.58 89.58 0 0 0 128 218Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleMinusLight);
export default Memo;
