import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCalendarXLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 34h-26V24a6 6 0 0 0-12 0v10H86V24a6 6 0 0 0-12 0v10H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM48 46h26v10a6 6 0 0 0 12 0V46h84v10a6 6 0 0 0 12 0V46h26a2 2 0 0 1 2 2v34H46V48a2 2 0 0 1 2-2Zm160 164H48a2 2 0 0 1-2-2V94h164v114a2 2 0 0 1-2 2Zm-51.76-77.76L136.48 152l19.76 19.76a6 6 0 1 1-8.48 8.48L128 160.48l-19.76 19.76a6 6 0 0 1-8.48-8.48L119.52 152l-19.76-19.76a6 6 0 1 1 8.48-8.48L128 143.52l19.76-19.76a6 6 0 1 1 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgCalendarXLight);
export default Memo;
