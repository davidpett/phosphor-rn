import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyDollarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 116h-12V60h4a28 28 0 0 1 28 28 12 12 0 0 0 24 0 52.06 52.06 0 0 0-52-52h-4V24a12 12 0 0 0-24 0v12h-4a52 52 0 0 0 0 104h4v56h-12a28 28 0 0 1-28-28 12 12 0 0 0-24 0 52.06 52.06 0 0 0 52 52h12v12a12 12 0 0 0 24 0v-12h12a52 52 0 0 0 0-104Zm-40 0a28 28 0 0 1 0-56h4v56Zm40 80h-12v-56h12a28 28 0 0 1 0 56Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyDollarBold);
export default Memo;
