export class Todo {
    id: number;
    title: '';
    complete: false;
    created: any;
    state: string = 'inactive';
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
