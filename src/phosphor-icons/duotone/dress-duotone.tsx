import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDressDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 224H56a8 8 0 0 1-7.35-11.15L96 112 73.14 76.12a8 8 0 0 1 0-8.24L96 35.23l7 8.77a32 32 0 0 0 50 0l7-8.76 22.86 32.65a8 8 0 0 1 0 8.24L160 112l47.34 100.85A8 8 0 0 1 200 224Z"
      opacity={0.2}
    />
    <Path d="M214.7 209.7a1.89 1.89 0 0 0-.11-.25l-45.48-96.86 20.5-32.18.11-.18a16 16 0 0 0 0-16.46c-.09-.16-.2-.32-.3-.47L168 32.7V8a8 8 0 0 0-16 0v24.42L146.74 39a24 24 0 0 1-37.48 0L104 32.42V8a8 8 0 0 0-16 0v24.7L66.58 63.3c-.1.15-.21.31-.3.47a16 16 0 0 0 0 16.46l.11.18 20.5 32.18-45.48 96.86a1.89 1.89 0 0 0-.11.25A16 16 0 0 0 56 232h144a16 16 0 0 0 14.71-22.3ZM80 72l16.43-23.43.33.42a40 40 0 0 0 62.48 0l.33-.42L176 72l-20.38 32h-55.23ZM56 216l45.07-96h53.84L200 216Z" />
  </Svg>
);
const Memo = memo(SvgDressDuotone);
export default Memo;
