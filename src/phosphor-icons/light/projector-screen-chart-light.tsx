import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenChartLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M90 144v-16a6 6 0 0 1 12 0v16a6 6 0 0 1-12 0Zm38 6a6 6 0 0 0 6-6v-24a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6Zm32 0a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Zm54-72v100h10a6 6 0 0 1 0 12h-90v20.84a22 22 0 1 1-12 0V190H32a6 6 0 0 1 0-12h10V78h-2a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h176a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14Zm-86 144a10 10 0 1 0 10 10 10 10 0 0 0-10-10ZM40 66h176a2 2 0 0 0 2-2V48a2 2 0 0 0-2-2H40a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Zm162 12H54v100h148Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenChartLight);
export default Memo;
