import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { Warning, WarningLoadMatch, WarningListMatch } from '../AutobahnApiDeTypes';
declare class WarningEntity extends AutobahnApiDeEntityBase<Warning> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: WarningEntity): WarningEntity;
    load(this: any, reqmatch?: WarningLoadMatch, ctrl?: Control): Promise<WarningEntity>;
    list(this: any, reqmatch?: WarningListMatch, ctrl?: Control): Promise<WarningEntity[]>;
}
export { WarningEntity };
