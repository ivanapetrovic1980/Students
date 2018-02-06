import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-student';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';



@Injectable()
export class MockServiceService {

  constructor(private messageService: MessageService) { }

  getStudentsFromMockFile(): Observable<Student[]> {
    this.messageService.addNewMessage('Dohvaceni su podaci o studentima.');
    return of(STUDENTS);
  }

}
