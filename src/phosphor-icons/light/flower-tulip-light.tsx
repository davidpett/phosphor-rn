import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowerTulipLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 50a85.52 85.52 0 0 0-36.17 8c-14.67-25.9-40-38.79-41.15-39.37a6 6 0 0 0-5.36 0c-1.14.58-26.48 13.47-41.15 39.37A85.52 85.52 0 0 0 48 50a6 6 0 0 0-6 6v40a86.1 86.1 0 0 0 80 85.77v40.52l-39.32-19.66a6 6 0 0 0-5.36 10.74l48 24a6 6 0 0 0 5.36 0l48-24a6 6 0 1 0-5.36-10.74L134 222.29v-40.52A86.1 86.1 0 0 0 214 96V56a6 6 0 0 0-6-6Zm-80-19.12c6.46 3.84 23.07 15 33.33 32.94A86.5 86.5 0 0 0 128 104.5a86.5 86.5 0 0 0-33.33-40.68c10.26-17.99 26.87-29.11 33.33-32.94ZM54 96V62.24A74.11 74.11 0 0 1 122 136v33.76A74.1 74.1 0 0 1 54 96Zm148 0a74.1 74.1 0 0 1-68 73.76V136a74.11 74.11 0 0 1 68-73.76Z" />
  </Svg>
);
const Memo = memo(SvgFlowerTulipLight);
export default Memo;
