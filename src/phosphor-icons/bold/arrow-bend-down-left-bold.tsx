import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 56a108.12 108.12 0 0 1-108 108H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 0 1 17 17L61 140h67a84.09 84.09 0 0 0 84-84 12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownLeftBold);
export default Memo;
