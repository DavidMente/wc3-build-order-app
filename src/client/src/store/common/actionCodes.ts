import {ActionCode, Race} from './types';
import peasantImg from '../../assets/images/units/peasant.png';
import riflemanImg from '../../assets/images/units/rifleman.png';
import peonImg from '../../assets/images/units/peon.png';
import wispImg from '../../assets/images/units/wisp.png';
import acolyteImg from '../../assets/images/units/acolyte.png';
import farmImg from '../../assets/images/buildings/HumanFarm.png';
import barracksImg from '../../assets/images/buildings/HumanBarracks.png';
import blacksmithImg from '../../assets/images/buildings/HumanBlacksmith.png';
import altarOfKingsImg from '../../assets/images/buildings/HumanAltarofKings.png';
import footmanImg from '../../assets/images/units/footman.png';
import cryptImg from '../../assets/images/buildings/UndeadCrypt.png';
import ghoulImg from '../../assets/images/units/ghoul.png';
import townHallImg from '../../assets/images/buildings/HumanTownHall.png';
import keepImg from '../../assets/images/buildings/HumanKeep.png';
import scoutTowerImg from '../../assets/images/buildings/HumanScoutTower.png';
import arcaneVaultImg from '../../assets/images/buildings/HumanArcaneVault.png';
import lumberMillImg from '../../assets/images/buildings/HumanLumberMill.png';
import customImg from '../../assets/images/QuestionMark.png';

export function stringToActionCode(str: string): ActionCode {
    if (Object.keys(ActionCode).includes(str)) {
        // @ts-ignore
        return ActionCode[str];
    } else {
        return ActionCode.CUSTOM;
    }
}

export enum ActionCodeType {
    BUILDING = 'Build',
    UNIT = 'Train',
    UPGRADE = 'Upgrade',
    RESEARCH = 'Research',
}

interface ActionCodeDetails {
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

export const actionCodesToDetailsMap = new Map<ActionCode, ActionCodeDetails>([
    [ActionCode.CUSTOM, {code: ActionCode.CUSTOM, name: 'Custom', src: customImg}],
    [ActionCode.PEASANT, {
        code: ActionCode.PEASANT,
        name: 'Peasant',
        src: peasantImg,
        foodCost: 1,
        type: ActionCodeType.UNIT,
        race: Race.HUMAN,
    }],
    [ActionCode.FOOTMAN, {
        name: 'Footman', src: footmanImg, foodCost: 2, requires: [ActionCode.BARRACKS], type: ActionCodeType.UNIT,
        race: Race.HUMAN, code: ActionCode.FOOTMAN,
    }],
    [ActionCode.RIFLEMAN, {
        name: 'Rifleman', src: riflemanImg, requires: [ActionCode.BARRACKS, ActionCode.BLACKSMITH], foodCost: 3,
        type: ActionCodeType.UNIT, race: Race.HUMAN, code: ActionCode.RIFLEMAN,
    }],
    [ActionCode.FARM, {
        name: 'Farm',
        src: farmImg,
        foodProvided: 6,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.FARM,
    }],
    [ActionCode.ALTAR_OF_KINGS, {
        name: 'Altar of Kings',
        src: altarOfKingsImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.ALTAR_OF_KINGS,
    }],
    [ActionCode.BARRACKS, {
        name: 'Barracks',
        src: barracksImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.BARRACKS,
    }],
    [ActionCode.BLACKSMITH, {
        name: 'Blacksmith',
        src: blacksmithImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.BLACKSMITH,
    }],
    [ActionCode.LUMBERMILL, {
        name: 'Lumber Mill',
        src: lumberMillImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.LUMBERMILL,
    }],
    [ActionCode.ARCANE_VAULT, {
        name: 'Arcane Vault',
        src: arcaneVaultImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.ARCANE_VAULT,
    }],
    [ActionCode.SCOUT_TOWER, {
        name: 'Scout Tower',
        src: scoutTowerImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.SCOUT_TOWER,
    }],
    [ActionCode.TOWN_HALL, {
        name: 'Town Hall',
        src: townHallImg,
        type: ActionCodeType.BUILDING,
        race: Race.HUMAN,
        code: ActionCode.TOWN_HALL,
    }],
    [ActionCode.KEEP, {
        name: 'Keep',
        src: keepImg,
        type: ActionCodeType.UPGRADE,
        description: 'Tech to Tier 2',
        race: Race.HUMAN,
        code: ActionCode.KEEP,
    }],
    [ActionCode.WISP, {
        name: 'Wisp',
        src: wispImg,
        foodCost: 1,
        type: ActionCodeType.UNIT,
        race: Race.NIGHTELF,
        code: ActionCode.WISP,
    }],
    [ActionCode.PEON, {
        name: 'Peon',
        src: peonImg,
        foodCost: 1,
        type: ActionCodeType.UNIT,
        race: Race.ORC,
        code: ActionCode.PEON,
    }],
    [ActionCode.ACOLYTE, {
        name: 'Acolyte',
        src: acolyteImg,
        foodCost: 1,
        type: ActionCodeType.UNIT,
        race: Race.UNDEAD,
        code: ActionCode.ACOLYTE,
    }],
    [ActionCode.GHOUL, {
        name: 'Ghoul',
        src: ghoulImg,
        foodCost: 2,
        requires: [ActionCode.CRYPT],
        type: ActionCodeType.BUILDING,
        race: Race.UNDEAD,
        code: ActionCode.GHOUL,
    }],
    [ActionCode.CRYPT, {
        name: 'Crypt',
        src: cryptImg,
        type: ActionCodeType.UNIT,
        race: Race.UNDEAD,
        code: ActionCode.CRYPT,
    }],
]);

export const mapActionCodeToDetails = (actionCode: ActionCode): ActionCodeDetails =>
    actionCodesToDetailsMap.get(actionCode) || {code: ActionCode.CUSTOM, name: 'Custom', src: customImg};

export const getStartingActionCodesByRace = (race: Race | null) => {
    switch (race) {
        case Race.ORC:
            return [ActionCode.PEON, ActionCode.PEON, ActionCode.PEON, ActionCode.PEON, ActionCode.PEON];
        case Race.UNDEAD:
            return [ActionCode.ACOLYTE, ActionCode.ACOLYTE, ActionCode.ACOLYTE, ActionCode.GHOUL];
        case Race.HUMAN:
            return [ActionCode.TOWN_HALL, ActionCode.PEASANT, ActionCode.PEASANT, ActionCode.PEASANT,
                ActionCode.PEASANT, ActionCode.PEASANT];
        case Race.NIGHTELF:
            return [ActionCode.WISP, ActionCode.WISP, ActionCode.WISP, ActionCode.WISP, ActionCode.WISP];
        default:
            return [];
    }
};

export function getActionCodesByRaceAndType(race: Race, type: ActionCodeType): ActionCode[] {
    return Array.from(actionCodesToDetailsMap)
        .filter((value) => value[1].race === race && value[1].type === type)
        .map((value) => value[0]);
}
