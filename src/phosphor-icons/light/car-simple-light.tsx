import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 114h-12.1l-28.31-63.69A14 14 0 0 0 186.8 42H69.2a14 14 0 0 0-12.79 8.31L28.1 114H16a6 6 0 0 0 0 12h10v82a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h100v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-82h10a6 6 0 0 0 0-12ZM67.37 55.19A2 2 0 0 1 69.2 54h117.6a2 2 0 0 1 1.83 1.19L214.77 114H41.23ZM218 208a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2v-24a6 6 0 0 0-6-6H72a6 6 0 0 0-6 6v24a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-82h180Z" />
  </Svg>
);
const Memo = memo(SvgCarSimpleLight);
export default Memo;
