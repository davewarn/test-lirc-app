declare module 'lirc_node' {
    export type RemoteName = string;
    export type RemoteCommand = string;
    export function init();
    export const remotes: { [key: RemoteName]: RemoteCommand[] };
    export const irsend: IRSend;
    export interface IRSend {
        send_once(remote: RemoteName, command: RemoteCommand, callback?: (error: Error) => void);
        send_start(remote: RemoteName, command: RemoteCommand, callback?: (error: Error) => void);
        send_stop(remote: RemoteName, command: RemoteCommand, callback?: (error: Error) => void);
    }
    export function addListener(callback: (data: IRData) => void): number;
    export function addListener(callback: (data: IRData) => void, throttle?: number): number;
    export function addListener(command: RemoteCommand, remote: RemoteName, callback: (data: IRData) => void): number;
    export function addListener(command: RemoteCommand, remote: RemoteName, callback: (data: IRData) => void, throttle?: number): number;
    export type IRData = {
        code: string;
        repeat: string;
        key: string;
        remote: string;
    }
};