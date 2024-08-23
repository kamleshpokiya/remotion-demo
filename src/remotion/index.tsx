import { registerRoot } from 'remotion';
import { Composition } from 'remotion';
import { Composition1 } from '../compositions/Composition1';
import { Composition2 } from '../compositions/Composition2';
import { Composition3 } from '../compositions/Composition3';

registerRoot(() => (
  <>
    <Composition
      id="Composition1"
      component={Composition1}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={720}
    />
    <Composition
      id="Composition2"
      component={Composition2}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={720}
    />
    <Composition
      id="Composition3"
      component={Composition3}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={720}
    />
  </>
));
