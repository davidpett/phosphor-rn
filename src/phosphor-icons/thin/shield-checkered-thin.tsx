import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldCheckeredThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 44H48a12 12 0 0 0-12 12v58.77c0 86.87 73.54 115.7 88.28 120.59a11.68 11.68 0 0 0 3.7.62 11.68 11.68 0 0 0 3.7-.62c14.78-4.87 88.32-33.7 88.32-120.57V56a12 12 0 0 0-12-12Zm4 12v58.77c0 3.16-.12 6.22-.31 9.21H132V52h76a4 4 0 0 1 4 4ZM44 56a4 4 0 0 1 4-4h76v72H44.31c-.19-3-.31-6-.31-9.21Zm1.09 76H124v94.81C107 220.55 53.4 196 45.09 132ZM132 226.81V132h78.91C202.6 196 149 220.55 132 226.81Z" />
  </Svg>
);
const Memo = memo(SvgShieldCheckeredThin);
export default Memo;
