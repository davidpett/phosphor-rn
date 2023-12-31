import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFigmaLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180.45 96A38 38 0 0 0 160 26H88a38 38 0 0 0-20.45 70A38 38 0 0 0 69 160.89 42 42 0 1 0 134 196v-40.32A38 38 0 1 0 180.45 96ZM186 64a26 26 0 0 1-26 26h-26V38h26a26 26 0 0 1 26 26ZM62 64a26 26 0 0 1 26-26h34v52H88a26 26 0 0 1-26-26Zm26 90a26 26 0 0 1 0-52h34v52H88Zm34 42a30 30 0 1 1-30-30h30Zm38-42a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" />
  </Svg>
);
const Memo = memo(SvgFigmaLogoLight);
export default Memo;
