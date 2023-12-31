import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldPlusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a20 20 0 0 0-20 20v58.8c0 92.36 78.1 123 93.75 128.18a19.63 19.63 0 0 0 12.49 0C149.9 237.78 228 207.16 228 114.8V56a20 20 0 0 0-20-20Zm-4 78.8c0 73.55-60.52 99.52-76 105-15.47-5.42-76-31.39-76-104.95V60h152ZM84 128a12 12 0 0 1 12-12h20V96a12 12 0 0 1 24 0v20h20a12 12 0 0 1 0 24h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgShieldPlusBold);
export default Memo;
