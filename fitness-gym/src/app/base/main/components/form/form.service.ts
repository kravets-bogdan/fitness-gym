// * Base
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

// * Types
type ItemRequestData = {
  name: string;
  phone: number;
  text: string;
};

type UserPhone = {
  number: number;
};

type ItemResponsetData = {
  succes: boolean;
  message: string;
};

@Injectable()
export class FormService {
  // * Injects
  private readonly http = inject(HttpClient);

  requestFeedback(data: ItemRequestData) {
    return this.http.post<ItemResponsetData>(`/items/additems`, data);
  }

  userPhone(data: UserPhone) {
    return this.http.post<ItemResponsetData>(`/items/additems`, data);
  }
}
