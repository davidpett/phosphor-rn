import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesPlusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 56a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0V62h-18a6 6 0 0 1 0-12h18V32a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6ZM86 116.68V204a34.06 34.06 0 1 1-12-25.89V64a6 6 0 0 1 4.54-5.82l56-14a6 6 0 1 1 2.92 11.64L86 68.68v35.64l72.54-18.14a6 6 0 1 1 2.92 11.64ZM74 204a22 22 0 1 0-22 22 22 22 0 0 0 22-22Zm140-84v52a34.06 34.06 0 1 1-12-25.89V120a6 6 0 0 1 12 0Zm-12 52a22 22 0 1 0-22 22 22 22 0 0 0 22-22Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesPlusLight);
export default Memo;
