import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPeaceThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm92 100a91.44 91.44 0 0 1-14.44 49.43L132 125.92V36.09A92.11 92.11 0 0 1 220 128Zm-96-91.91v89.83l-73.56 51.51A92 92 0 0 1 124 36.09ZM55 184l69-48.29v84.23A91.94 91.94 0 0 1 55 184Zm77 35.94v-84.26L201 184a91.94 91.94 0 0 1-69 35.91Z" />
  </Svg>
);
const Memo = memo(SvgPeaceThin);
export default Memo;
