import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { ElectricChargingStation, ElectricChargingStationLoadMatch, ElectricChargingStationListMatch } from '../AutobahnApiDeTypes';
declare class ElectricChargingStationEntity extends AutobahnApiDeEntityBase<ElectricChargingStation> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: ElectricChargingStationEntity): ElectricChargingStationEntity;
    load(this: any, reqmatch?: ElectricChargingStationLoadMatch, ctrl?: Control): Promise<ElectricChargingStationEntity>;
    list(this: any, reqmatch?: ElectricChargingStationListMatch, ctrl?: Control): Promise<ElectricChargingStationEntity[]>;
}
export { ElectricChargingStationEntity };
