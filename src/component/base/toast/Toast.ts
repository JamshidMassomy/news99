export enum NotificationType {
  SUCCESS,
  ERROR,
}

interface Notification {
  isActive: boolean;
  message: string;
  type?: NotificationType;
}

export type { Notification };
