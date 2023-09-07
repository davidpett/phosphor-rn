import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircuitryFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m88 111.31 48 48V220a4 4 0 0 1-4 4H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h20a4 4 0 0 1 4 4v117.38a24 24 0 1 0 16 0ZM80 184a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm104-80a8 8 0 1 0-8 8 8 8 0 0 0 8-8Zm24-72h-52a4 4 0 0 0-4 4v32.69l13.66 13.66a24 24 0 1 1-11.31 11.31l-16-16A8 8 0 0 1 136 72V36a4 4 0 0 0-4-4H92a4 4 0 0 0-4 4v52.69l61.66 61.65A8 8 0 0 1 152 156v64a4 4 0 0 0 4 4h52a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgCircuitryFill);
export default Memo;
