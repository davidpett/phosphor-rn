import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDressLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212.86 210.49a1.08 1.08 0 0 0-.08-.19l-45.94-97.86 21.08-33.1.09-.14a14 14 0 0 0 0-14.4c-.07-.12-.15-.24-.23-.36L166 33.33V8a6 6 0 0 0-12 0v25.12l-5.7 7.12a26 26 0 0 1-40.6 0l-5.7-7.12V8a6 6 0 0 0-12 0v25.33L68.22 64.44c-.08.12-.16.24-.23.36a14 14 0 0 0 0 14.4l.09.14 21.08 33.1-45.94 97.86a1.08 1.08 0 0 0-.08.19A14 14 0 0 0 56 230h144a14 14 0 0 0 12.87-19.51ZM78.26 73a2 2 0 0 1-.05-1.89l18.11-25.88 2 2.51a38 38 0 0 0 59.34 0l2-2.51 18.11 25.86a2 2 0 0 1 0 1.89l-21 33H99.29Zm123.4 144.1a1.93 1.93 0 0 1-1.67.9H56a2 2 0 0 1-1.87-2.72L99.81 118h56.38l45.67 97.28a1.92 1.92 0 0 1-.2 1.82Z" />
  </Svg>
);
const Memo = memo(SvgDressLight);
export default Memo;
