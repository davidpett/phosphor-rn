import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKanbanLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 50H40a6 6 0 0 0-6 6v152a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h52v18a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6Zm-6 64h-44V62h44ZM90 62v52H46V62Zm0 146a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-82h44Zm12-62V62h52v84Zm106 32h-40a2 2 0 0 1-2-2v-50h44v50a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgKanbanLight);
export default Memo;
