import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
import '../../ExternalRef/css/cropper.min.css';
import '../../ExternalRef/css/cropper.css';
import '../../ExternalRef/css/richtext.min.css';
import '../../ExternalRef/js/cropper-main.js';
import '../../ExternalRef/js/cropper.min.js';
import '../../ExternalRef/css/bootstrap-datepicker.min.css';
import '../../ExternalRef/css/bootstrap-datepicker.min.css';
import '../../ExternalRef/css/alertify.min.css';
import '../../ExternalRef/css/richtext.min.css';
import '../../ExternalRef/css/cropper.min.css';
export interface IAddListItemWebPartProps {
    description: string;
    Count: string;
}
export default class AddListItemWebPart extends BaseClientSideWebPart<IAddListItemWebPartProps> {
    render(): void;
    loadComponent(IsAnonymous: any): void;
    datepickerkeyTypeBlocker(): void;
    pageBack(): void;
    AddItem(siteURL: any, e: any, IsAnonymous: any): boolean;
    AddDepartments(): Promise<void>;
    bindorgDept(): void;
    bindgalleryImage(): void;
    bindSearchTitle(siteURL: any, isSearch: any): Promise<void>;
    validateVideoFileType(): void;
    validateFileType(): void;
    AddListItems(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
