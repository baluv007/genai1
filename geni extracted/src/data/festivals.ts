import { buddhistFestivals } from './buddhist-festivals';
import { christianFestivals } from './christian-festivals';
import { hinduFestivals } from './hindu-festivals';
import { jainFestivals } from './jain-festivals';
import { muslimFestivals } from './muslim-festivals';
import { sikhFestivals } from './sikh-festivals';

export const festivals = [
  ...hinduFestivals,
  ...muslimFestivals,
  ...sikhFestivals,
  ...christianFestivals,
  ...jainFestivals,
  ...buddhistFestivals
];