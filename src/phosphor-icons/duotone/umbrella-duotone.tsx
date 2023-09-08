import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 32S88 64 88 136H32a8 8 0 0 1-8-8.71A104.21 104.21 0 0 1 128 32Zm104 95.29A104.21 104.21 0 0 0 128 32s40 32 40 104h56a8 8 0 0 0 8-8.71Z"
      opacity={0.2}
    />
    <Path d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0 8 8 0 0 0-16 0 16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37ZM32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128Zm64.15 0c1.39-30.77 10.53-52.81 18.3-66.24A106.44 106.44 0 0 1 128 43.16a106.31 106.31 0 0 1 13.52 18.6C154.8 84.7 159 109.28 159.82 128Zm79.65 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaDuotone);
export default Memo;
