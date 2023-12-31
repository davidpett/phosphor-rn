import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPasswordThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M44 56v144a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0Zm89.2 58.31-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 1 0-2.47 7.61l25.2 8.18L82 151.54a4 4 0 1 0 6.47 4.7L104 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65 4 4 0 0 0 3.23-6.35l-15.57-21.44 25.2-8.18a4 4 0 0 0-2.47-7.61Zm101 2.57a4 4 0 0 0-5-2.57l-25.2 8.18V96a4 4 0 0 0-8 0v26.49l-25.2-8.18a4 4 0 0 0-2.47 7.61l25.2 8.18L178 151.54a4 4 0 1 0 6.47 4.7L200 134.81l15.57 21.43a4 4 0 0 0 3.24 1.65 4 4 0 0 0 3.23-6.35l-15.57-21.44 25.2-8.18a4 4 0 0 0 2.57-5.04Z" />
  </Svg>
);
const Memo = memo(SvgPasswordThin);
export default Memo;
