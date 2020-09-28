import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class GetEntityReference
  implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  // Declare properties that will be used by the control.
  private _context: ComponentFramework.Context<IInputs>;
  private _container: HTMLDivElement;
  private _label: HTMLLabelElement;

  // Declare the variable that will store the entity reference used in the control.
  private _entityReference: {
    id: string;
    typeName: string;
    entityRecordName: string;
  };

  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement
  ) {
    // Set the values for the control properties.
    this._context = context;

    // Create HTML elements used.
    this._container = document.createElement("div");
    this._label = document.createElement("label");
    this._label.setAttribute("id", "lblID");
    this._container.appendChild(this._label);
    container.appendChild(this._container);

    // Setting default values.
    this._entityReference = {
      id: "",
      typeName: "",
      entityRecordName: "",
    };
  }

  public updateView(context: ComponentFramework.Context<IInputs>): void {
    /**
     * Create a variable for the context.  NOTE: Not supported.
     */
    let contextInfo = (<any>context).mode.contextInfo;

    /**
     * Update the entity reference property.  NOTE: not all entities require the "entityRecordName"
     */
    this._entityReference = {
      id: contextInfo.entityId ? contextInfo.entityId : "",
      typeName: contextInfo.typeName ? contextInfo.typeName : "",
      entityRecordName: contextInfo.entityRecordName
        ? contextInfo.entityRecordName
        : "",
    };

    console.log(this._entityReference);
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
