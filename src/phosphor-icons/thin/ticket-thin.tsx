import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTicketThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M226.4 100.56a12 12 0 0 0 9.6-11.75V64a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v24.81a12 12 0 0 0 9.6 11.75 28 28 0 0 1 0 54.88 12 12 0 0 0-9.6 11.75V192a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12v-24.81a12 12 0 0 0-9.6-11.75 28 28 0 0 1 0-54.88ZM28 192v-24.81a4 4 0 0 1 3.2-3.91 36 36 0 0 0 0-70.56 4 4 0 0 1-3.2-3.91V64a4 4 0 0 1 4-4h60v136H32a4 4 0 0 1-4-4Zm168-64a36.09 36.09 0 0 0 28.8 35.28 4 4 0 0 1 3.2 3.91V192a4 4 0 0 1-4 4H100V60h124a4 4 0 0 1 4 4v24.81a4 4 0 0 1-3.2 3.91A36.09 36.09 0 0 0 196 128Z" />
  </Svg>
);
const Memo = memo(SvgTicketThin);
export default Memo;
