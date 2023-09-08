import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaSimple = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 126.63A112.44 112.44 0 0 0 51.75 53.75a111.56 111.56 0 0 0-35.7 72.88A16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0 8 8 0 0 0-16 0 16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37ZM32 128a96.43 96.43 0 0 1 161.4-62.48A95.32 95.32 0 0 1 224 128Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaSimple);
export default Memo;
