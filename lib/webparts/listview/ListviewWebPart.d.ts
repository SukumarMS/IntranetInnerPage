import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IListviewWebPartProps {
    description: string;
}
export default class ListviewWebPart extends BaseClientSideWebPart<IListviewWebPartProps> {
    userflag: boolean;
    render(): void;
    viewlistitemdesign(): void;
    ViewListItems(strLocalStorage: any): void;
    displaypollcheck(): void;
    renderhtml(objResults: any, strLocalStorage: any): void;
    viewitem(strLocalStorage: any): void;
    edititem(strLocalStorage: any): void;
    deleteitems(strLocalStorage: any): void;
    eventfunction(): void;
    holidayfunction(): void;
    addevent(strLocalStorage: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
