import { Picture } from './picture';

export class Album {
  constructor(
    public name?: string,
    public description?: string,
    public _id?: string,
    public pictures?: Array<Picture>
  ) {}
}
