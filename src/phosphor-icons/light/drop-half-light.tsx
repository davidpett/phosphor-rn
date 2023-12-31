import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropHalfLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172.53 49.06a251.42 251.42 0 0 0-41.09-38 6 6 0 0 0-6.88 0 251.42 251.42 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94ZM202 144a75 75 0 0 1-.69 10H134v-20h67.44a92.09 92.09 0 0 1 .56 10Zm-15.2-54H134V70h39.89a176 176 0 0 1 12.91 20ZM134 198h44.52A73.76 73.76 0 0 1 134 217.74Zm0-12v-20h64.66a74.05 74.05 0 0 1-9.78 20Zm0-64v-20h58.7a117.43 117.43 0 0 1 6.69 20Zm30.29-64H134V28.3A257.09 257.09 0 0 1 164.29 58ZM54 144c0-53.42 47.35-98.56 68-115.7v189.44A74.09 74.09 0 0 1 54 144Z" />
  </Svg>
);
const Memo = memo(SvgDropHalfLight);
export default Memo;
