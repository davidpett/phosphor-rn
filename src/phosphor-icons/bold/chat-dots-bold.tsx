import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatDotsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H40a20 20 0 0 0-20 20v160a19.82 19.82 0 0 0 11.56 18.1 20.14 20.14 0 0 0 8.49 1.9 19.91 19.91 0 0 0 12.82-4.72l.19-.16L84 212h132a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm-4 144H82.5a20 20 0 0 0-12.87 4.69l-.19.16L44 215.14V68h168ZM88 128a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgChatDotsBold);
export default Memo;
