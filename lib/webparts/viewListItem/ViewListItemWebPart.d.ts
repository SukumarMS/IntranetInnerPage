import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import 'jquery';
import '../../ExternalRef/css/richtext.min.css';
export interface IViewListItemWebPartProps {
    description: string;
}
export default class ViewListItemWebPart extends BaseClientSideWebPart<IViewListItemWebPartProps> {
    render(): void;
    FetchListItems(): Promise<void>;
    GetColumns(listName: string): any[];
    GetDocImages(DocType: string): any;
    renderhtml(): void;
    SubmitComments(): void;
    GetComments(filterKey?: boolean): void;
    DeleteComments(id: string): void;
    SubmitLikes(): Promise<void>;
    GetLikes(): Promise<void>;
    nullDateValidate(nullDate: any): string;
    GetLikesCount(): Promise<void>;
    GetViewCount(Users: string): Promise<any>;
    AnnouncementValidation(): boolean;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
