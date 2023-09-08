import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56.88 31.93a12 12 0 1 0-17.76 16.14L64.51 76H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h43.88l68.75 53.47A12 12 0 0 0 164 224v-38.56l35.12 38.63a12 12 0 0 0 17.76-16.14ZM36 100h32v56H36Zm104 99.46-48-37.33v-55.89L140 159Zm-31-134a12 12 0 0 1 2.11-16.84l33.51-26.07A12 12 0 0 1 164 32v62.94a12 12 0 0 1-24 0v-38.4l-14.15 11a12 12 0 0 1-16.85-2.1Zm74 49.35a12 12 0 0 1 18-15.85 44 44 0 0 1 5.55 50.21 12 12 0 0 1-21-11.55A19.67 19.67 0 0 0 188 128a20 20 0 0 0-5-13.21ZM252 128a84.18 84.18 0 0 1-19.11 53.35 12 12 0 1 1-18.53-15.25 60 60 0 0 0-1.63-78.1 12 12 0 1 1 17.88-16A83.87 83.87 0 0 1 252 128Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSlashBold);
export default Memo;
