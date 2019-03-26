import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IImageGalleryDetailWebPartProps {
    description: string;
}
export default class ImageGalleryDetailWebPart extends BaseClientSideWebPart<IImageGalleryDetailWebPartProps> {
    render(): void;
    checkUserPermissionForDeletion(): void;
    replaceAllSpaces(str: any): any;
    replaceAllPlus(str: any): any;
    /****** START ******/
    getItems(): Promise<void>;
    ImgGalDetails(imgeventid: any, ImgHtml: any): Promise<void>;
    ImageGalleryFolderchecking(folderName: string): void;
    /****** END *****/
    DeleteItem(itemId: any): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
