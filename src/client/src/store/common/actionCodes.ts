import {ActionCode, ActionCodeDetails, ActionCodeType, Race} from './types';
import peasantImg from '../../assets/images/units/Peasant.png';
import defendImg from '../../assets/images/research/Defend.png';
import archmageImg from '../../assets/images/units/Archmage.png';
import mountainKingImg from '../../assets/images/units/MountainKing.png';
import paladinImg from '../../assets/images/units/Paladin.png';
import bloodMageImg from '../../assets/images/units/BloodMage.png';
import riflemanImg from '../../assets/images/units/rifleman.png';
import peonImg from '../../assets/images/units/peon.png';
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
import arcaneTowerImg from '../../assets/images/buildings/HumanArcaneTower.png';
import guardTowerImg from '../../assets/images/buildings/HumanGuardTower.png';
import arcaneVaultImg from '../../assets/images/buildings/HumanArcaneVault.png';
import lumberMillImg from '../../assets/images/buildings/HumanLumberMill.png';
import customImg from '../../assets/images/QuestionMark.png';
import wispImg from '../../assets/images/units/wisp.png';
import archerImg from '../../assets/images/units/Archer.png';
import huntressImg from '../../assets/images/units/Huntress.png';
import glaiveThrowerImg from '../../assets/images/units/GlaiveThrower.png';
import ancientOfWarImg from '../../assets/images/buildings/NightElfAncientofWar.png';
import huntersHallImg from '../../assets/images/buildings/NightElfHuntersHall.png';
import moonWellImg from '../../assets/images/buildings/NightElfMoonWell.png';
import altarOfEldersImg from '../../assets/images/buildings/NightElfAltarofElders.png';
import treeOfLifeImg from '../../assets/images/buildings/NightElfTreeofLife.png';
import treeOfAgesImg from '../../assets/images/buildings/NightElfTreeofAges.png';
import ancientOfWondersImg from '../../assets/images/buildings/NightElfAncientofWonders.png';
import ancientProtectorImg from '../../assets/images/buildings/NightElfAncientProtector.png';
import demonHunterImg from '../../assets/images/units/DemonHunter.png';
import keeperOfTheGroveImg from '../../assets/images/units/KeeperoftheGrove.png';
import priestessOfTheMoonImg from '../../assets/images/units/PriestessoftheMoon.png';
import wardenImg from '../../assets/images/units/Warden.png';

export function stringToActionCode(str: string): ActionCode {
    if (Object.keys(ActionCode).includes(str)) {
        // @ts-ignore
        return ActionCode[str];
    } else {
        return ActionCode.CUSTOM;
    }
}

const TIER_2 = 'Tech to Tier 2';

export const actionCodesToDetailsMap = new Map<ActionCode, ActionCodeDetails>([
    [ActionCode.CUSTOM, {code: ActionCode.CUSTOM, name: 'Custom', src: customImg}],
    [ActionCode.DEFEND, {
        name: 'Defend', src: defendImg, requires: [ActionCode.BARRACKS], type: ActionCodeType.RESEARCH,
        race: Race.HUMAN, code: ActionCode.DEFEND,
    }],
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
    [ActionCode.ARCHMAGE, {
        name: 'Archmage', src: archmageImg, requires: [ActionCode.ALTAR_OF_KINGS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.HUMAN, code: ActionCode.ARCHMAGE,
    }],
    [ActionCode.MOUNTAIN_KING, {
        name: 'Mountain King', src: mountainKingImg, requires: [ActionCode.ALTAR_OF_KINGS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.HUMAN, code: ActionCode.MOUNTAIN_KING,
    }],
    [ActionCode.PALADIN, {
        name: 'Paladin', src: paladinImg, requires: [ActionCode.ALTAR_OF_KINGS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.HUMAN, code: ActionCode.PALADIN,
    }],
    [ActionCode.BLOOD_MAGE, {
        name: 'Blood Mage', src: bloodMageImg, requires: [ActionCode.ALTAR_OF_KINGS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.HUMAN, code: ActionCode.BLOOD_MAGE,
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
    [ActionCode.ARCANE_TOWER, {
        name: 'Arcane Tower',
        src: arcaneTowerImg,
        type: ActionCodeType.UPGRADE,
        race: Race.HUMAN,
        code: ActionCode.ARCANE_TOWER,
        requires: [ActionCode.SCOUT_TOWER, ActionCode.ARCANE_VAULT],
        description: 'Upgrade Scout Tower to Arcane Tower',
    }],
    [ActionCode.GUARD_TOWER, {
        name: 'Guard Tower',
        src: guardTowerImg,
        type: ActionCodeType.UPGRADE,
        race: Race.HUMAN,
        code: ActionCode.GUARD_TOWER,
        requires: [ActionCode.SCOUT_TOWER, ActionCode.LUMBERMILL],
        description: 'Upgrade Scout Tower to Guard Tower',
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
        description: TIER_2,
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
    [ActionCode.ARCHER, {
        name: 'Archer',
        src: archerImg,
        foodCost: 2,
        type: ActionCodeType.UNIT,
        race: Race.NIGHTELF,
        code: ActionCode.ARCHER,
        requires: [ActionCode.ANCIENT_OF_WAR],
    }],
    [ActionCode.HUNTRESS, {
        name: 'Huntress',
        src: huntressImg,
        foodCost: 3,
        type: ActionCodeType.UNIT,
        race: Race.NIGHTELF,
        code: ActionCode.HUNTRESS,
        requires: [ActionCode.ANCIENT_OF_WAR, ActionCode.HUNTERS_HALL],
    }],
    [ActionCode.GLAIVE_THROWER, {
        name: 'Glaive Thrower',
        src: glaiveThrowerImg,
        foodCost: 3,
        type: ActionCodeType.UNIT,
        race: Race.NIGHTELF,
        code: ActionCode.GLAIVE_THROWER,
        requires: [ActionCode.ANCIENT_OF_WAR, ActionCode.HUNTERS_HALL],
    }],
    [ActionCode.MOON_WELL, {
        name: 'Moon Well',
        src: moonWellImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        foodProvided: 10,
        code: ActionCode.MOON_WELL,
    }],
    [ActionCode.ALTAR_OF_ELDERS, {
        name: 'Altar of Elders',
        src: altarOfEldersImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        code: ActionCode.ALTAR_OF_ELDERS,
    }],
    [ActionCode.ANCIENT_OF_WAR, {
        name: 'Ancient of War',
        src: ancientOfWarImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        foodCost: -1,
        code: ActionCode.ANCIENT_OF_WAR,
    }],
    [ActionCode.HUNTERS_HALL, {
        name: 'Hunters Hall',
        src: huntersHallImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        code: ActionCode.HUNTERS_HALL,
    }],
    [ActionCode.TREE_OF_LIFE, {
        name: 'Tree of Life',
        src: treeOfLifeImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        foodProvided: 10,
        code: ActionCode.TREE_OF_LIFE,
    }],
    [ActionCode.TREE_OF_AGES, {
        name: 'Tree of Ages',
        src: treeOfAgesImg,
        type: ActionCodeType.UPGRADE,
        race: Race.NIGHTELF,
        code: ActionCode.TREE_OF_AGES,
        description: TIER_2,
    }],
    [ActionCode.ANCIENT_PROTECTOR, {
        name: 'Ancient Protector',
        src: ancientProtectorImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        code: ActionCode.ANCIENT_PROTECTOR,
    }],
    [ActionCode.ANCIENT_OF_WONDERS, {
        name: 'Ancient of Wonders',
        src: ancientOfWondersImg,
        type: ActionCodeType.BUILDING,
        race: Race.NIGHTELF,
        code: ActionCode.ANCIENT_OF_WONDERS,
    }],
    [ActionCode.DEMON_HUNTER, {
        name: 'Demon Hunter', src: demonHunterImg, requires: [ActionCode.ALTAR_OF_ELDERS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.NIGHTELF, code: ActionCode.DEMON_HUNTER,
    }],
    [ActionCode.KEEPER_OF_THE_GROVE, {
        name: 'Keeper of the Grove', src: keeperOfTheGroveImg, requires: [ActionCode.ALTAR_OF_ELDERS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.NIGHTELF, code: ActionCode.KEEPER_OF_THE_GROVE,
    }],
    [ActionCode.PRIESTESS_OF_THE_MOON, {
        name: 'Priestess of the Moon', src: priestessOfTheMoonImg, requires: [ActionCode.ALTAR_OF_ELDERS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.NIGHTELF, code: ActionCode.PRIESTESS_OF_THE_MOON,
    }],
    [ActionCode.WARDEN, {
        name: 'Warden', src: wardenImg, requires: [ActionCode.ALTAR_OF_ELDERS], foodCost: 5,
        type: ActionCodeType.HERO, race: Race.NIGHTELF, code: ActionCode.WARDEN,
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
            return [ActionCode.TREE_OF_LIFE, ActionCode.WISP, ActionCode.WISP, ActionCode.WISP, ActionCode.WISP,
                ActionCode.WISP];
        default:
            return [];
    }
};

export function getActionCodesByRaceAndType(race: Race, type: ActionCodeType): ActionCode[] {
    return Array.from(actionCodesToDetailsMap)
        .filter((value) => value[1].race === race && value[1].type === type)
        .map((value) => value[0]);
}
