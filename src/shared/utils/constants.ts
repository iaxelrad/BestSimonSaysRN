import Sound from 'react-native-sound';

export interface GameButtonModel {
  color: string;
  sound: Sound;
}
export const gameButtons: GameButtonModel[] = [
  {color: '120', sound: new Sound('do_sound.mp3', Sound.MAIN_BUNDLE)},
  {color: '0', sound: new Sound('re_sound.mp3', Sound.MAIN_BUNDLE)},
  {color: '55', sound: new Sound('mi_sound.mp3', Sound.MAIN_BUNDLE)},
  {color: '240', sound: new Sound('fa_sound.mp3', Sound.MAIN_BUNDLE)},
];

export const MAX_NUM_OF_RESULTS = 10;

export const GAME_SPEED = 15;
