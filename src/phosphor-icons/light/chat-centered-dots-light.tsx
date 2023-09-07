import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCenteredDotsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h59.47a2 2 0 0 1 1.71 1L116 223.2a14 14 0 0 0 24 .05L154.82 199a2 2 0 0 1 1.71-1H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 142a2 2 0 0 1-2 2h-59.47a14 14 0 0 0-12 6.75L129.72 217a2 2 0 0 1-3.46 0l-14.8-24.22a14.09 14.09 0 0 0-12-6.77H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2Zm-80-64a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm-44 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm88 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgChatCenteredDotsLight);
export default Memo;
