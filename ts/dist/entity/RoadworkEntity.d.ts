import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { Roadwork, RoadworkLoadMatch, RoadworkListMatch } from '../AutobahnApiDeTypes';
declare class RoadworkEntity extends AutobahnApiDeEntityBase<Roadwork> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: RoadworkEntity): RoadworkEntity;
    load(this: any, reqmatch?: RoadworkLoadMatch, ctrl?: Control): Promise<RoadworkEntity>;
    list(this: any, reqmatch?: RoadworkListMatch, ctrl?: Control): Promise<RoadworkEntity[]>;
}
export { RoadworkEntity };
