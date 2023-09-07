import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExcludeSquareThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 92h-52V40a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h52v52a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4Zm-54.34 120-48-48h44.68l48 48ZM44 49.66l48 48v44.68l-48-48ZM94.34 44l48 48H97.66l-48-48ZM100 156v-56h56v56Zm64 2.34v-44.68l48 48v44.68ZM212 100v50.34l-48-48V100Zm-56-8h-2.34l-48-48H156ZM44 156v-50.34l48 48V156Zm56 8h2.34l48 48H100Z" />
  </Svg>
);
const Memo = memo(SvgExcludeSquareThin);
export default Memo;
