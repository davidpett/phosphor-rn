import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileDocLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 146H36a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h16a34 34 0 0 0 0-68Zm0 56H42v-44h10a22 22 0 0 1 0 44Zm168.15-5.46a6 6 0 0 1 .18 8.48A28.06 28.06 0 0 1 200 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9 6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 200 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a16.23 16.23 0 0 0 11.67-5.28 6 6 0 0 1 8.48-.18ZM128 146c-16.54 0-30 15.25-30 34s13.46 34 30 34 30-15.25 30-34-13.46-34-30-34Zm0 56c-9.93 0-18-9.87-18-22s8.07-22 18-22 18 9.87 18 22-8.07 22-18 22Zm-80-84a6 6 0 0 0 6-6V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 6 6Zm110-71.52L193.52 82H158Z" />
  </Svg>
);
const Memo = memo(SvgFileDocLight);
export default Memo;