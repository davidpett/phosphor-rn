import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCenteredTextFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16l59.5.06 14.78 24.17a16 16 0 0 0 27.41.06L156.53 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-56 104H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgChatCenteredTextFill);
export default Memo;
