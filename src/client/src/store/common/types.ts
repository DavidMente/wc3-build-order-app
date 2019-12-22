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
    CUSTOM = 'CUSTOM',
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
    WISP = 'WISP',
    ARCHER = 'ARCHER',
    HUNTRESS = 'HUNTRESS',
    GLAIVE_THROWER = 'GLAIVE_THROWER',
    MOON_WELL = 'MOON_WELL',
    ALTAR_OF_ELDERS = 'ALTAR_OF_ELDERS',
    ANCIENT_OF_WAR = 'ANCIENT_OF_WAR',
    HUNTERS_HALL = 'HUNTERS_HALL',
    TREE_OF_LIFE = 'TREE_OF_LIFE',
    ANCIENT_PROTECTOR = 'ANCIENT_PROTECTOR',
    ANCIENT_OF_WONDERS = 'ANCIENT_OF_WONDERS',
    TREE_OF_AGES = 'TREE_OF_AGES',
    DEMON_HUNTER = 'DEMON_HUNTER',
    KEEPER_OF_THE_GROVE = 'KEEPER_OF_THE_GROVE',
    PRIESTESS_OF_THE_MOON = 'PRIESTESS_OF_THE_MOON',
    WARDEN = 'WARDEN',
    ACOLYTE = 'ACOLYTE',
    CRYPT = 'CRYPT',
    GHOUL = 'GHOUL',
    PEON = 'PEON',
}

export enum ActionCodeType {
    BUILDING = 'Build',
    UNIT = 'Train',
    HERO = 'Recruit',
    UPGRADE = 'Upgrade',
    RESEARCH = 'Research',
}

export interface ActionCodeDetails {
    name: string,
    src: string,
    code: ActionCode,
    type?: ActionCodeType,
    requires?: ActionCode[],
    foodCost?: number,
    foodProvided?: number,
    description?: string,
    race?: Race,
}
