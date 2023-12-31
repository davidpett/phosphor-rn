import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinuxLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.49 225.38a12 12 0 0 1-16.89-1.9C213.19 221.72 180 179.24 180 96a52 52 0 1 0-104 0c0 83.24-33.21 125.72-34.62 127.48a12 12 0 0 1-18.78-14.95C23 208 52 170.06 52 96a76 76 0 1 1 152 0c0 74.19 29.1 112.16 29.4 112.54a12 12 0 0 1-1.91 16.84ZM104 128a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm64-16a16 16 0 1 0-16 16 16 16 0 0 0 16-16Zm-72.74 51 28 12a12 12 0 0 0 9.45 0l28-12a12 12 0 0 0-9.45-22l-23.27 10-23.27-10a12 12 0 0 0-9.46 22ZM128 192a57.12 57.12 0 0 0-38.66 15.15 12 12 0 0 0 16.23 17.69 32.86 32.86 0 0 1 44.85 0 12 12 0 1 0 16.23-17.69A57.1 57.1 0 0 0 128 192Z" />
  </Svg>
);
const Memo = memo(SvgLinuxLogoBold);
export default Memo;
