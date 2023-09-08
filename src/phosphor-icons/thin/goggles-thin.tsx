import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGogglesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252 136a68.07 68.07 0 0 0-68-68H72a68.07 68.07 0 0 0-68 68 20 20 0 0 0 16.35 19.65C23.91 174.84 54.81 188 72 188a36 36 0 0 0 35.77-32h40.46A36 36 0 0 0 184 188c17.19 0 48.09-13.16 51.65-32.35A20 20 0 0 0 252 136ZM28 152c0-7.75 7.92-15.25 17.81-20.53l43 42.95A27.89 27.89 0 0 1 72 180c-16.55 0-44-13.56-44-28Zm66.42 16.76-40.84-40.84C60 125.46 66.58 124 72 124a28 28 0 0 1 22.42 44.76ZM156 152a27.94 27.94 0 0 1 9.42-20.92L208 173.65c-8 3.91-17 6.35-24 6.35a28 28 0 0 1-28-28Zm59.2 17.55-42.95-43A27.86 27.86 0 0 1 184 124c16.55 0 44 13.56 44 28 0 6.39-5.38 12.6-12.8 17.55Zm20.26-22.06C231.15 128.77 200.93 116 184 116a36 36 0 0 0-35.77 32h-40.46A36 36 0 0 0 72 116c-16.93 0-47.15 12.77-51.46 31.49A12 12 0 0 1 12 136a60.07 60.07 0 0 1 60-60h112a60.07 60.07 0 0 1 60 60 12 12 0 0 1-8.54 11.49Z" />
  </Svg>
);
const Memo = memo(SvgGogglesThin);
export default Memo;
