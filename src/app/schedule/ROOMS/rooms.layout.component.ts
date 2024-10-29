import { Component, OnInit } from '@angular/core';
import { Room } from '@app/_models/rooms';
import { SubjectService } from '@app/_services/subjects.service';

@Component({ templateUrl: 'rooms.layout.component.html' })
export class roomsLayoutComponent implements OnInit {
  rooms: Room[] = [];
  loading = true;
  id?: string;
  errorMessage = '';

  constructor(private subjectService: SubjectService) {}

  ngOnInit() {
    // Example: Fetch teachers from 'Mandaue Campus' and 'College of Computer Studies'
    this.subjectService.getRooms().subscribe((data: Room[]) => {
      console.log('Rooms:', data);
      this.rooms = data;
      this.loading = false;
    });
  }
}
