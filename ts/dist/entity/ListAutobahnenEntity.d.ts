import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { ListAutobahnen, ListAutobahnenListMatch } from '../AutobahnApiDeTypes';
declare class ListAutobahnenEntity extends AutobahnApiDeEntityBase<ListAutobahnen> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: ListAutobahnenEntity): ListAutobahnenEntity;
    list(this: any, reqmatch?: ListAutobahnenListMatch, ctrl?: Control): Promise<ListAutobahnenEntity[]>;
}
export { ListAutobahnenEntity };
