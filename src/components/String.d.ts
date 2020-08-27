//in a .d.ts file:
// declare global {
   export interface String {
    splice( idx:any, rem:any, s:any ): string;
    }
// }