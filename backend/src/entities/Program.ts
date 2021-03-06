export class Program {
  public readonly id: string

  public name: string
  public descr: string
  public binaryPath: string

  constructor(props: Omit<Program, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      //this.id = uuid();
    }
  }
}
