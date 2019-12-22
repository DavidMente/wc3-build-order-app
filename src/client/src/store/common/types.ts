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
    NEUTRAL = 'NEUTRAL',
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
    ATTACK = 'ATTACK',
    GOLD = 'GOLD',
    LUMBER = 'LUMBER',
    PANDAREN_BREWMASTER = 'PANDAREN_BREWMASTER',
    NAGA_SEA_WITCH = 'NAGA_SEA_WITCH',
    DARK_RANGER = 'DARK_RANGER',
    PIT_LORD = 'PIT_LORD',
    FIRELORD = 'FIRE_LORD',
    ALCHEMIST = 'ALCHEMIST',
    GOBLIN_TINKER = 'GOBLIN_TINKER',
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
    PEON = 'PEON',
    GRUNT = 'GRUNT',
    TROLL_HEADHUNTER = 'TROLL_HEADHUNTER',
    BLADEMASTER = 'BLADEMASTER',
    FAR_SEER = 'FAR_SEER',
    TAUREN_CHIEFTAIN = 'TAUREN_CHIEFTAIN',
    SHADOW_HUNTER = 'SHADOW_HUNTER',
    ALTAR_OF_STORMS = 'ALTAR_OF_STORMS',
    BURROW = 'BURROW',
    ORC_BARRACKS = 'ORC_BARRACKS',
    WAR_MILL = 'WAR_MILL',
    ORC_TOWER = 'ORC_TOWER',
    STRONGHOLD = 'STRONGHOLD',
    VOODOO_LOUNGE = 'VOODOO_LOUNGE',
    GREAT_HALL = 'GREAT_HALL',
    ACOLYTE = 'ACOLYTE',
    GHOUL = 'GHOUL',
    CRYPT_FIEND = 'CRYPT_FIEND',
    CRYPT = 'CRYPT',
    DEATH_KNIGHT = 'DEATH_KNIGHT',
    LICH = 'LICH',
    DREAD_LORD = 'DREAD_LORD',
    CRYPT_LORD = 'CRYPT_LORD',
    ALTAR_OF_DARKNESS = 'ALTAR_OF_DARKNESS',
    ZIGGURAT = 'ZIGGURAT',
    TOMB_OF_RELICS = 'TOMB_OF_RELICS',
    GRAVEYARD = 'GRAVEYARD',
    NECROPOLIS = 'NECROPOLIS',
    HALL_OF_THE_DEAD = 'HALL_OF_THE_DEAD',
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
