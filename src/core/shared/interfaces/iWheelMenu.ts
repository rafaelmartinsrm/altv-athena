import { Vector2 } from '../../shared/interfaces/vector';

export interface IWheelItem {
    name?: string;
    data?: Array<any>;
    emitServer?: string;
    emitClient?: string;
}

export interface IClientWheelItem extends IWheelItem {
    callback?: Function;
}

export interface FullWheelItem extends IClientWheelItem, Vector2 {
    name?: string;
    callback?: Function;
    emitServer?: string;
    emitClient?: string;
    label?: string;
    points?: Array<FullWheelItem>;
}

export interface IWheelMenu {
    label: string;
    points: Array<FullWheelItem>;
    center: Vector2;
}
