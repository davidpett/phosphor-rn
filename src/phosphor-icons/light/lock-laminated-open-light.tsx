import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockLaminatedOpenLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14ZM46 126h164v20H46Zm0 32h164v20H46Zm2-64h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2Zm160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgLockLaminatedOpenLight);
export default Memo;
