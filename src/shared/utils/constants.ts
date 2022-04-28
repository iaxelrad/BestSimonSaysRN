import Sound from 'react-native-sound';

export interface GameButtonModel {
  color: string;
  sound: Sound;
}
export const gameButtons: GameButtonModel[] = [
  {
    color: '#66ddfb',
    sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: '#eded4e',
    sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: '#ea3338',
    sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE),
  },
  {
    color: '#75fb6e',
    sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE),
  },
];

export const FAIL_SOUND = new Sound('fail_sound.mp3', Sound.MAIN_BUNDLE);

export const MAX_NUM_OF_RESULTS = 10;

export const GAME_SPEED = 15;
