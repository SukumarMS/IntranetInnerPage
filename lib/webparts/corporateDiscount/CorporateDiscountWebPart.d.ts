import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface ICorporateDiscountWebPartProps {
    description: string;
}
export default class CorporateDiscountWebPart extends BaseClientSideWebPart<ICorporateDiscountWebPartProps> {
    userflag: boolean;
    render(): void;
    loadcomponent(): void;
    corporateSearch(): void;
    CorDis(searchText: any): void;
    viewitem(): void;
    edititem(): void;
    deleteitems(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
