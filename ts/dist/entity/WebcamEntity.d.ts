import { AutobahnApiDeEntityBase } from '../AutobahnApiDeEntityBase';
import type { AutobahnApiDeSDK } from '../AutobahnApiDeSDK';
import type { Control } from '../types';
import type { Webcam, WebcamLoadMatch, WebcamListMatch } from '../AutobahnApiDeTypes';
declare class WebcamEntity extends AutobahnApiDeEntityBase<Webcam> {
    constructor(client: AutobahnApiDeSDK, entopts: any);
    make(this: WebcamEntity): WebcamEntity;
    load(this: any, reqmatch?: WebcamLoadMatch, ctrl?: Control): Promise<WebcamEntity>;
    list(this: any, reqmatch?: WebcamListMatch, ctrl?: Control): Promise<WebcamEntity[]>;
}
export { WebcamEntity };
