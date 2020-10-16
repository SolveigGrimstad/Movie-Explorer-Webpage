import { ModificationNote } from "../common/model";

export interface IMovie {
    _id?: String;
    title: String;
    year: number;
    date_published: string 
    genre: String;
    duration: String;
    country: string;
    language: string; 
    director: string; 
    modification_notes: ModificationNote[]

}