import { Tema } from '../components/tema/tema.model';

export class WebStorageUtil {
  static get(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getArray(key: string): any[] {
    if (localStorage.getItem(key) == undefined) {
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setArray(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static saveItemArray(keyPlaylist: string, value: any) {
    let playlist = this.getArray(keyPlaylist);
    playlist.push(value);
    this.setArray(keyPlaylist, playlist);
  }

  static sequenceId(key: string) {
    return this.getArray(key).length;
  }
}
