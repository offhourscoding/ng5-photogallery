import { Picture } from './picture';

export class Album {
  constructor(
    public _id?: string,
    public name?: string,
    public description?: string,
    public pictures?: Array<Picture>
  ) {}
}
