import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.interface';
import { CreateTrackDto } from './create-track.dto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  getTracks(): Track[] {
    return this.trackService.getTracks();
  }

  @Get(':id')
  getTrack(@Param('id') id: string) {
    return this.trackService.getTrack(id);
  }

  @Post()
  createTrack(@Body() createUserDto: CreateTrackDto) {
    return this.trackService.createTrack(createUserDto);
  }
}
