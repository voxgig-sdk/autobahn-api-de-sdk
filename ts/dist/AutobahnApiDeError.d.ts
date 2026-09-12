import { Context } from './Context';
declare class AutobahnApiDeError extends Error {
    isAutobahnApiDeError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { AutobahnApiDeError };
