import Sound from 'react-native-sound';

export interface GameButtonModel {
  color: string;
  sound: Sound;
}
export const gameButtons: GameButtonModel[] = [
  {
    color: 'green',
    sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: 'red',
    sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: 'blue',
    sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: 'orange',
    sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE),
  },
];

export const MAX_NUM_OF_RESULTS = 10;

export const GAME_SPEED = 15;
