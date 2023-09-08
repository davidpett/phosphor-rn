import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPiggyBankBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 120a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-44-56h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24Zm100 48v32a28 28 0 0 1-27.54 28l-15.26 42.73A20 20 0 0 1 194.36 228h-12.72a20 20 0 0 1-18.84-13.27l-1-2.73h-51.63l-1 2.73A20 20 0 0 1 90.36 228H77.64a20 20 0 0 1-18.84-13.27l-12.3-34.45a91.63 91.63 0 0 1-20.75-42.48A11.91 11.91 0 0 0 24 144a12 12 0 0 1-24 0 36.07 36.07 0 0 1 24.56-34.13A92.13 92.13 0 0 1 116 28h104a12 12 0 0 1 0 24h-10a92 92 0 0 1 22.48 31.45l.42 1A28.05 28.05 0 0 1 256 112Zm-24 0a4 4 0 0 0-4-4h-3.66a12 12 0 0 1-11.45-8.41A68 68 0 0 0 148 52h-32a68 68 0 0 0-50.14 113.94 11.85 11.85 0 0 1 2.45 4.06l12.15 34h7.08l2.87-8a12 12 0 0 1 11.3-8h68.58a12 12 0 0 1 11.3 8l2.87 8h7.08l17.16-48a12 12 0 0 1 11.3-8h8a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgPiggyBankBold);
export default Memo;
