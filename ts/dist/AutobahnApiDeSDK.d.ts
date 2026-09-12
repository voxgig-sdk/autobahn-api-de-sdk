import { ClosureEntity } from './entity/ClosureEntity';
import { ElectricChargingStationEntity } from './entity/ElectricChargingStationEntity';
import { ListAutobahnenEntity } from './entity/ListAutobahnenEntity';
import { ParkingLorryEntity } from './entity/ParkingLorryEntity';
import { RoadworkEntity } from './entity/RoadworkEntity';
import { WarningEntity } from './entity/WarningEntity';
import { WebcamEntity } from './entity/WebcamEntity';
export type * from './AutobahnApiDeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { AutobahnApiDeEntityBase } from './AutobahnApiDeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class AutobahnApiDeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Closure(entopts?: Record<string, any>): ClosureEntity;
    ElectricChargingStation(entopts?: Record<string, any>): ElectricChargingStationEntity;
    ListAutobahnen(entopts?: Record<string, any>): ListAutobahnenEntity;
    ParkingLorry(entopts?: Record<string, any>): ParkingLorryEntity;
    Roadwork(entopts?: Record<string, any>): RoadworkEntity;
    Warning(entopts?: Record<string, any>): WarningEntity;
    Webcam(entopts?: Record<string, any>): WebcamEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): AutobahnApiDeSDK;
    tester(testopts?: any, sdkopts?: any): AutobahnApiDeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof AutobahnApiDeSDK;
export { stdutil, config, BaseFeature, AutobahnApiDeEntityBase, AutobahnApiDeSDK, SDK, };
