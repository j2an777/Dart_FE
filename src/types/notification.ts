import { Event } from "event-source-polyfill";

export interface NotificationResponse {
  message: string;
  type: null | 'coupon' | 'live';
}

export interface MessageEvent extends Event {
  data: NotificationResponse
} 