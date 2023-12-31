import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapTrifoldDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 72v144l-64-32V40Z" opacity={0.2} />
    <Path d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28 61.35 30.68a8.15 8.15 0 0 0 3.58.84 8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31ZM104 52.94l48 24v126.12l-48-24Zm-64 9.31 48-12v127.5l-48 12Zm176 131.5-48 12V78.25l48-12Z" />
  </Svg>
);
const Memo = memo(SvgMapTrifoldDuotone);
export default Memo;
