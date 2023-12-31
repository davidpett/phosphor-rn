import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilCircle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46ZM88 192a16 16 0 0 1 32 0v23.59a88 88 0 0 1-32-9.22Zm48 0a16 16 0 0 1 32 0v14.37a88 88 0 0 1-32 9.22Zm-28.73-56h41.46l11.58 25.1a31.93 31.93 0 0 0-32.31 9.77 31.93 31.93 0 0 0-32.31-9.77Zm7.39-16L128 91.09 141.34 120Zm75.56 70.23c-2 2-4.08 3.87-6.22 5.64V176a7.91 7.91 0 0 0-.74-3.35l-48-104a8 8 0 0 0-14.52 0l-48 104A7.91 7.91 0 0 0 72 176v19.87a88.917 88.917 0 0 1-6.22-5.64 88 88 0 1 1 124.44 0Z" />
  </Svg>
);
const Memo = memo(SvgPencilCircle);
export default Memo;
