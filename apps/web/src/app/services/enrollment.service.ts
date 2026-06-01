import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface EnrollmentPayload {
  studentName: string;
  age: number | null;
  guardianName: string;
  email: string;
  phone: string;
  city: string;
  modality: string;
}

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly http = inject(HttpClient);

  submit(data: EnrollmentPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${environment.apiUrl}/api/enrollment`, data);
  }
}
