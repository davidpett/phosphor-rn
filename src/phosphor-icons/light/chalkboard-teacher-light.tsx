import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChalkboardTeacherLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h13.39a6 6 0 0 0 5.42-3.43 50 50 0 0 1 90.38 0 6 6 0 0 0 5.42 3.43H216a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM78 144a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm140 56a2 2 0 0 1-2 2h-57.73a62.34 62.34 0 0 0-31.48-27.61 38 38 0 1 0-45.58 0A62.34 62.34 0 0 0 49.73 202H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM198 80v96a6 6 0 0 1-6 6h-16a6 6 0 0 1 0-12h10V86H70v10a6 6 0 0 1-12 0V80a6 6 0 0 1 6-6h128a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgChalkboardTeacherLight);
export default Memo;
