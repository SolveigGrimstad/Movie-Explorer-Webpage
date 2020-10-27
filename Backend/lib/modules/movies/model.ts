import { ModificationNote } from "../common/model";

export interface IMovie {
  _id?: String;
  Title: String;
  year: String;
  released: String;
  duration: String;
  genre: String;
  director: String;
  actors: String;
  summary: String;
  language: String;
  country: String;
  imageUrl: String;
  rating: String;
  modification_notes: ModificationNote[];
}
