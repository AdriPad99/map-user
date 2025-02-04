/// <reference types="@types/google.maps" />
import { User } from "./User";
import { CustomMap } from "./CustomMap";

// creates new map instance with 'map' argument
const customMap = new CustomMap('map');
// creates new instance of a user
const user = new User();
// calls the map class user marker method using the newly created user
customMap.addUserMarker(user);

