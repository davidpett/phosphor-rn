import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneIncoming = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 96V56a8 8 0 0 1 16 0v20.69l34.34-34.35a8 8 0 0 1 11.32 11.32L179.32 88H200a8 8 0 0 1 0 16h-40a8 8 0 0 1-8-8Zm79.88 79.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.24 56.24 0 0 1 48.92-55.87 16 16 0 0 1 16.62 9.51l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56 16 16 0 0 1 15.17-1.4l.13.06 47.11 21.11a16 16 0 0 1 9.55 16.62Zm-15.88-2h-.11l-47-21.05-24.35 20.71a6.84 6.84 0 0 1-.74.56 16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7 6.13 6.13 0 0 1 .57-.77L104 87.15l-21-47a.61.61 0 0 1 0-.12A40.2 40.2 0 0 0 48 80a128.14 128.14 0 0 0 128 128 40.21 40.21 0 0 0 40-34.93Z" />
  </Svg>
);
const Memo = memo(SvgPhoneIncoming);
export default Memo;
