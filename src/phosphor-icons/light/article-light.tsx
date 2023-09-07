import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM182 96a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6Zm0 32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6Zm0 32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArticleLight);
export default Memo;
