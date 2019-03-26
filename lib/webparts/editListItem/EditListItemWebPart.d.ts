import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
import '../../ExternalRef/css/cropper.min.css';
import '../../ExternalRef/css/cropper.css';
import '../../ExternalRef/css/richtext.min.css';
import '../../ExternalRef/js/cropper-main.js';
import '../../ExternalRef/js/cropper.min.js';
import '../../ExternalRef/css/bootstrap-datepicker.min.css';
export interface IEditListItemWebPartProps {
    description: string;
}
export default class EditListItemWebPart extends BaseClientSideWebPart<IEditListItemWebPartProps> {
    strcropstorage: string;
    imageValue: number;
    imgsrc: any;
    qustion_lenght: any;
    answer_lenght: any;
    siteURL: string;
    render(): void;
    loadEditComponent(): void;
    pageBack(): void;
    datepickerkeyTypeBlocker(): void;
    DateChecker(): boolean;
    EventDateChecker(): boolean;
    announcementsValidtion(): boolean;
    holidaysValidtion(): boolean;
    quickLinksValidation(): boolean;
    nullDateValidate(nullDate: any): string;
    newsValidation(): boolean;
    quickReadsValidation(): boolean;
    eventsValidation(): boolean;
    orgpolicyValidation(isAllfield: any): void;
    bannersValidation(): boolean;
    pollsValidation(): boolean;
    corporationValidation(): boolean;
    UpdateItem(siteURL: any, strLocalStorage: any, strComponentId: any): void;
    renderhtml(strComponentId: any): void;
    bindorgDept(): void;
    ViewMode(strComponentMode: any): void;
    getListItems(strComponentId: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
