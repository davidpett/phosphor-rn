import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareFourThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-48-64a4 4 0 0 1-4 4h-12v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1-3.79-5.27l24-72a4 4 0 0 1 7.58 2.54L101.55 140H140v-28a4 4 0 0 1 8 0v28h12a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareFourThin);
export default Memo;
