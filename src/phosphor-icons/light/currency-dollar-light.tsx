import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyDollarLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 122h-18V54h10a34 34 0 0 1 34 34 6 6 0 0 0 12 0 46.06 46.06 0 0 0-46-46h-10V24a6 6 0 0 0-12 0v18h-10a46 46 0 0 0 0 92h10v68h-18a34 34 0 0 1-34-34 6 6 0 0 0-12 0 46.06 46.06 0 0 0 46 46h18v18a6 6 0 0 0 12 0v-18h18a46 46 0 0 0 0-92Zm-40 0a34 34 0 0 1 0-68h10v68Zm40 80h-18v-68h18a34 34 0 0 1 0 68Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyDollarLight);
export default Memo;
