import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWhatsappLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m185.79 148.42-32-16a4 4 0 0 0-4 .25l-16.64 11.1a44.56 44.56 0 0 1-20.91-20.91l11.1-16.64a4 4 0 0 0 .25-4l-16-32A4 4 0 0 0 104 68a36 36 0 0 0-36 36 84.09 84.09 0 0 0 84 84 36 36 0 0 0 36-36 4 4 0 0 0-2.21-3.58ZM152 180a76.08 76.08 0 0 1-76-76 28 28 0 0 1 25.58-27.9l13.8 27.61-11 16.54A4 4 0 0 0 104 124a52.43 52.43 0 0 0 28 28 4 4 0 0 0 3.76-.37l16.54-11 27.61 13.8A28 28 0 0 1 152 180ZM128 28a100 100 0 0 0-87.47 148.5l-11.9 35.69a12 12 0 0 0 15.18 15.18l35.69-11.9A100 100 0 1 0 128 28Zm0 192a92 92 0 0 1-46.07-12.35 4.05 4.05 0 0 0-2-.54 3.93 3.93 0 0 0-1.27.21l-37.38 12.46a4 4 0 0 1-5.06-5.06l12.46-37.38a4 4 0 0 0-.33-3.27A92 92 0 1 1 128 220Z" />
  </Svg>
);
const Memo = memo(SvgWhatsappLogoThin);
export default Memo;