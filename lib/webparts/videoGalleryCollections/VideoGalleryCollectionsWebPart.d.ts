import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
export interface IVideoGalleryCollectionsWebPartProps {
    description: string;
}
export default class VideoGalleryCollectionsWebPart extends BaseClientSideWebPart<IVideoGalleryCollectionsWebPartProps> {
    render(): void;
    checkUserPermissionForDeletion(): void;
    /****** START ******/
    getItems(): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
