// this a JavaScript class, and because of that, 
// the types (number, string, etc.) are different from the types configured in the Database.

export default class Orphanage {
    id: number;

    name: string;

    latitude: number;

    longitude: number;

    about: string;

    instructions: string;

    opening_hours: string;

    open_on_weekends: boolean;
}