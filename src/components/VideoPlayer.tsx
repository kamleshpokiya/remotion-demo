import React, { useState, useEffect } from 'react';
import { Player } from '@remotion/player';
import { Composition1 } from '../compositions/Composition1';
import { Composition2 } from '../compositions/Composition2';
import { Composition3 } from '../compositions/Composition3';

export const enum Compositions {
  Composition1 = 'Composition1',
  Composition2 = 'Composition2',
  Composition3 = 'Composition3',
}

interface VideoPlayerProps {
  compositionId: Compositions;
}

const compositions = {
  [Compositions.Composition1]: Composition1,
  [Compositions.Composition2]: Composition2,
  [Compositions.Composition3]: Composition3,
};

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ compositionId }) => {
  const CompositionComponent = compositions[compositionId];

  // Use a state to force remount of the Player
  const [key, setKey] = useState(compositionId);

  // Effect to update key when compositionId changes
  useEffect(() => {
    setKey(compositionId);
  }, [compositionId]);

  return (
    <Player
      key={key} // Change key to remount Player on compositionId change
      component={CompositionComponent}
      durationInFrames={90}
      compositionWidth={1080}
      compositionHeight={720}
      fps={30}
      controls
      autoPlay={true}
    />
  );
};
