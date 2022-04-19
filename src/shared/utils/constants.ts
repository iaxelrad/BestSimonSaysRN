import Sound from 'react-native-sound';

export interface GameButtonModel {
  color: string;
  lighterColor: string;
  sound: Sound;
}
export const gameButtons: GameButtonModel[] = [
  {
    lighterColor: 'rgba(17,183,33,0.8)',
    color: 'rgba(17,183,33,1)',
    sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    lighterColor: 'rgba(255,68,56,0.8)',
    color: 'rgba(255,68,56,1)',
    sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    lighterColor: 'rgba(92,203,255,0.8)',
    color: 'rgba(92,203,255,1)',
    sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    lighterColor: 'rgba(254,255,4,0.8)',
    color: 'rgba(254,255,4,1)',
    sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE),
  },
];

export const MAX_NUM_OF_RESULTS = 10;

export const GAME_SPEED = 15;
