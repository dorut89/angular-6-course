export class User {
  userId: number;
  userName: string;
  userEmail: string;
  userDescription: string;

  constructor(user: {}) {
    Object.assign(this, user);
  }

}
