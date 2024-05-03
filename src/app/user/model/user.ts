export class User {

  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  instantMessaging?: string;
  birthDate?: Date;
  picture?: string;
  providerId?: string;
  provider?: string;
  accountNonExpired: boolean = true;
  accountNonLocked: boolean = true;
  credentialsNonExpired: boolean = true;
  enabled: boolean = true;
  emailVerified: boolean = false;
}

