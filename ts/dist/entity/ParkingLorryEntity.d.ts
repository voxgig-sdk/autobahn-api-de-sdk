import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { ParkingLorry, ParkingLorryLoadMatch, ParkingLorryListMatch } from '../AutobahnApiDeTypes';
declare class ParkingLorryEntity extends AutobahnApiDeEntityBase<ParkingLorry> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: ParkingLorryEntity): ParkingLorryEntity;
    load(this: any, reqmatch?: ParkingLorryLoadMatch, ctrl?: Control): Promise<ParkingLorryEntity>;
    list(this: any, reqmatch?: ParkingLorryListMatch, ctrl?: Control): Promise<ParkingLorryEntity[]>;
}
export { ParkingLorryEntity };
