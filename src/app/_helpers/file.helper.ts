import {Injectable} from '@angular/core';

export enum FileType {
  IMG = 'img',
  PDF = 'pdf',
  VIDEO = 'video',
  ITINERARY = 'itinerary'
}

@Injectable({
  providedIn: 'root'
})

export class FileHelper {

}
