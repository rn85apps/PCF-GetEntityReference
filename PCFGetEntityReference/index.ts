import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class GetEntityReference
  implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  // Declare the variable that will store the entity reference used in the control.
  private _entityReference: {
    id: string;
    typeName: string;
    entityRecordName: string;
  };

  constructor() {}

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {}

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    //Create a variable for the context.  NOTE: Not supported.
    let contextInfo = (<any>context).mode.contextInfo;

    //Update the entity reference property.
    this._entityReference = {
      id: contextInfo.entityId ? contextInfo.entityId : "",
      typeName: contextInfo.typeName ? contextInfo.typeName : "",
      entityRecordName: contextInfo.entityRecordName
        ? contextInfo.entityRecordName
        : "",
    };

    console.log(this._entityReference);
  }

  public getOutputs(): IOutputs {
    return {};
  }

  public destroy(): void {}
}
