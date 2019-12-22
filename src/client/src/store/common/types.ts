import {BuildOrderTask} from '../build_order_form/types';

export interface BuildOrderDescription {
    name: string | null,
    description: string | null,
    author: string | null,
    password?: string | null,
}

export interface BuildOrder extends BuildOrderDescription {
    name: string,
    race: Race,
    tasks: BuildOrderTask[],
    _id?: number,
    views: number,
}

interface FormError {
    [key: string]: string
}

export interface FormErrors {
    [key: string]: FormError
}

export interface Form {
    errors: FormErrors
}

export enum Race {
    NIGHTELF = 'NIGHTELF',
    HUMAN = 'HUMAN',
    ORC = 'ORC',
    UNDEAD = 'UNDEAD',
}

export function stringToRace(str: string): Race | null {
    if (Object.keys(Race).includes(str)) {
        // @ts-ignore
        return Race[str];
    } else {
        return null;
    }
}

export enum ActionCode {
    PEASANT = 'PEASANT',
    FOOTMAN = 'FOOTMAN',
    RIFLEMAN = 'RIFLEMAN',
    ARCHMAGE = 'ARCHMAGE',
    MOUNTAIN_KING = 'MOUNTAIN_KING',
    PALADIN = 'PALADIN',
    BLOOD_MAGE = 'BLOOD_MAGE',
    DEFEND = 'DEFEND',
    FARM = 'FARM',
    ALTAR_OF_KINGS = 'ALTAR_OF_KINGS',
    TOWN_HALL = 'TOWN_HALL',
    KEEP = 'KEEP',
    BARRACKS = 'BARRACKS',
    ARCANE_VAULT = 'ARCANE_VAULT',
    BLACKSMITH = 'BLACKSMITH',
    SCOUT_TOWER = 'SCOUT_TOWER',
    ARCANE_TOWER = 'ARCANE_TOWER',
    GUARD_TOWER = 'GUARD_TOWER',
    LUMBERMILL = 'LUMBERMILL',
    PEON = 'PEON',
    WISP = 'WISP',
    ACOLYTE = 'ACOLYTE',
    CRYPT = 'CRYPT',
    GHOUL = 'GHOUL',
    CUSTOM = 'CUSTOM',
}
