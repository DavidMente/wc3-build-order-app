import {LocalStorage} from './LocalStorage';
import {BuildOrderSort} from '../store/build_orders/types';
import {Race, stringToRace} from '../store/common/types';

export class SettingsRepository {

    public static saveSelectedRace(race: Race | null): void {
        LocalStorage.set('selectedRace', race);
    }

    public static getSelectedRace(): Race | null {
        return stringToRace(LocalStorage.get('selectedRace', null));
    }

    public static saveSortBy(sortBy: BuildOrderSort): void {
        LocalStorage.set('sortBy', sortBy);
    }

    public static getSortBy(): BuildOrderSort {
        return LocalStorage.get('sortBy') === 'id' ? BuildOrderSort.ID : BuildOrderSort.VIEWS;
    }

}
