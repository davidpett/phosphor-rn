import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172.53 49.06a252.86 252.86 0 0 0-41.09-38 6 6 0 0 0-6.88 0 252.86 252.86 0 0 0-41.09 38C56.34 80.26 42 113.09 42 144a86 86 0 0 0 172 0c0-30.91-14.34-63.74-41.47-94.94ZM128 218a74.09 74.09 0 0 1-74-74c0-59.62 59-108.93 74-120.51 15 11.58 74 60.89 74 120.51a74.09 74.09 0 0 1-74 74Zm53.92-65A55.58 55.58 0 0 1 137 197.92a7 7 0 0 1-1 .08 6 6 0 0 1-1-11.92c17.38-2.92 32.13-17.68 35.08-35.08a6 6 0 1 1 11.84 2Z" />
  </Svg>
);
const Memo = memo(SvgDropLight);
export default Memo;
