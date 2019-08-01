export default class UserType {
    id: string;
    display: string;
    description: string;
    active: boolean | string;
    
    constructor() {
      this.id = '';
      this.display = '';
      this.description = '';
      this.active = false;
    }
}
  