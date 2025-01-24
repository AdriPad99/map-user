import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        // get random first name
        this.name = faker.name.firstName();
        // assigns random lat and long and parsed into appropriate
        // float value.
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}