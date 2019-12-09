import React, {FunctionComponent} from 'react';
import undeadImg from '../../assets/images/buildings/UndeadBuild.png';
import orcImg from '../../assets/images/buildings/OrcBuild.png';
import humanImg from '../../assets/images/buildings/HumanBuild.png';
import nightelfImg from '../../assets/images/buildings/NightElfBuild.png';
import {Race} from '../../store/common/types';

interface RaceIconProps {
    race: Race,
    height?: number,
    width?: number,
    className?: string,
    onClick?: () => void,
}

export const RaceIcon: FunctionComponent<RaceIconProps> =
    ({race, onClick, className = '', height = 85, width = 85}) => {

        const raceImg = () => {
            switch (race) {
                case Race.NIGHTELF:
                    return nightelfImg;
                case Race.UNDEAD:
                    return undeadImg;
                case Race.ORC:
                    return orcImg;
                case Race.HUMAN:
                    return humanImg;
                default:
                    return '';
            }
        };

        return <img onClick={onClick} height={height} width={width} alt={race || ''} src={raceImg()}
                    className={className}
                    title={race.toLowerCase()}/>;
    };
