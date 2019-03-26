import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IImageGalleryWebPartProps {
    description: string;
}
export default class ImageGalleryWebPart extends BaseClientSideWebPart<IImageGalleryWebPartProps> {
    render(): void;
    checkUserPermissionForDeletion(): void;
    /****** START ******/
    getItems(): Promise<void>;
    /****** END ******/
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
