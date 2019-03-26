import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IOrganizationPolicyWebPartProps {
    description: string;
}
export default class OrganizationPolicyWebPart extends BaseClientSideWebPart<IOrganizationPolicyWebPartProps> {
    userflag: boolean;
    render(): void;
    loadcomponent(): void;
    OrgPage(): Promise<void>;
    Depart(): void;
    viewitem(): void;
    edititem(): void;
    deleteitems(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
