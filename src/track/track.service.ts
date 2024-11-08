import { Injectable } from '@nestjs/common';
import { Track } from './track.interface';

@Injectable()
export class TrackService {
  private tracks = [
    {
      id: '187a93f2-adcb-4dc4-9958-6ff02cd2fc58',
      name: 'Lalala',
      artistId: null,
      albumId: null,
      duration: 185,
    },
    {
      id: '9872bf42-f783-48d9-b62c-a9f787e8e7ca',
      name: 'Pupupu',
      artistId: null,
      albumId: null,
      duration: 201,
    },
  ];

  getTracks(): Track[] {
    return this.tracks;
  }
}
