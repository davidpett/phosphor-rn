import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesDownLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.54 133.7A6 6 0 0 0 224 130h-42v-26a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6v26H32a6 6 0 0 0-4.24 10.24l96 96a6 6 0 0 0 8.48 0l96-96a6 6 0 0 0 1.3-6.54ZM128 223.51 46.49 142H80a6 6 0 0 0 6-6v-26h84v26a6 6 0 0 0 6 6h33.51ZM74 40a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6Zm0 32a6 6 0 0 1 6-6h96a6 6 0 0 1 0 12H80a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesDownLight);
export default Memo;
