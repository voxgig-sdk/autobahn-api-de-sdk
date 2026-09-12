import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { Closure, ClosureLoadMatch, ClosureListMatch } from '../AutobahnApiDeTypes';
declare class ClosureEntity extends AutobahnApiDeEntityBase<Closure> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: ClosureEntity): ClosureEntity;
    load(this: any, reqmatch?: ClosureLoadMatch, ctrl?: Control): Promise<ClosureEntity>;
    list(this: any, reqmatch?: ClosureListMatch, ctrl?: Control): Promise<ClosureEntity[]>;
}
export { ClosureEntity };
