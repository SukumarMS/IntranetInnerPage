import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IVideoGalleryWebPartProps {
    description: string;
}
export default class VideoGalleryWebPart extends BaseClientSideWebPart<IVideoGalleryWebPartProps> {
    render(): void;
    checkUserPermissionForDeletion(): void;
    replaceAllSpaces(str: any): any;
    replaceAllPlus(str: any): any;
    /****** START ******/
    getItems(): Promise<void>;
    VidGalDetails(imgeventid: any, ImgHtml: any): Promise<void>;
    VideoGalleryFolderchecking(folderName: string): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
