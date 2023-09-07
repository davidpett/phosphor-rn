import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileArchiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49ZM183 80h-23V57Zm-67 132v-20h4a12 12 0 0 0 0-24h-4v-16h4a12 12 0 0 0 0-24h-4v-12a12 12 0 0 0-24 0v12h-4a12 12 0 0 0 0 24h4v16h-4a12 12 0 0 0 0 24h4v20H60V44h76v48a12 12 0 0 0 12 12h48v108Z" />
  </Svg>
);
const Memo = memo(SvgFileArchiveBold);
export default Memo;
