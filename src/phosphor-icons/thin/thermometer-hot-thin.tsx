import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerHotThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180.71 78.27a4 4 0 0 1 1-5.56c9.12-6.3 23.42-6.3 32.54 0 6.36 4.38 17.1 4.38 23.46 0a4 4 0 0 1 4.54 6.58 30.4 30.4 0 0 1-32.54 0c-6.36-4.38-17.1-4.38-23.46 0a4 4 0 0 1-5.54-1.02Zm57 26.44c-6.36 4.38-17.1 4.38-23.46 0-9.12-6.3-23.42-6.3-32.54 0a4 4 0 1 0 4.54 6.58c6.36-4.38 17.1-4.38 23.46 0a30.4 30.4 0 0 0 32.54 0 4 4 0 0 0-4.54-6.58ZM148 184a28 28 0 1 1-32-27.71V48a4 4 0 0 1 8 0v108.29A28 28 0 0 1 148 184Zm-8 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Zm40 0a60 60 0 1 1-96-48V48a36 36 0 0 1 72 0v88a60.06 60.06 0 0 1 24 48Zm-8 0a52.06 52.06 0 0 0-22.29-42.68A4 4 0 0 1 148 138V48a28 28 0 0 0-56 0v90a4 4 0 0 1-1.71 3.28A52 52 0 1 0 172 184Z" />
  </Svg>
);
const Memo = memo(SvgThermometerHotThin);
export default Memo;
