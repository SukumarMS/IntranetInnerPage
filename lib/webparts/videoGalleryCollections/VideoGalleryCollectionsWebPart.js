var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import { DeleteFolder, readItems, checkUserinGroup } from '../../commonJS';
import * as strings from 'VideoGalleryCollectionsWebPartStrings';
import { SPComponentLoader } from '@microsoft/sp-loader';
import 'jquery';
require('bootstrap');
var VideoGalleryCollectionsWebPart = (function (_super) {
    __extends(VideoGalleryCollectionsWebPart, _super);
    function VideoGalleryCollectionsWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoGalleryCollectionsWebPart.prototype.render = function () {
        SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
        var siteURL = this.context.pageContext.site.absoluteUrl;
        this.domElement.innerHTML =
            "<div class='breadcrumb'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home'>Home</a></li>" +
                "<li><a href='" + siteURL + "/Pages/VideoCollections.aspx'>Video Collections</a></li>" +
                "</ol>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field'>" +
                "<a href='" + siteURL + "/Pages/AddListItem.aspx?CName=Video Gallery' title='Add New' class='pointer' id='AddingButtons'><i class='icon-add'></i>Add New</a>" +
                "<a href='" + siteURL + "/Pages/Home.aspx' class='delete-icon pointer' title='Close'><img src='" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Close</a>" +
                "</div>" +
                "<h2>Video Gallery</h2>" +
                "</div>" +
                "\n      <div class=\"gallery-listsec\">\n      </div>  \n      ";
        this.getItems();
        this.checkUserPermissionForDeletion();
    };
    VideoGalleryCollectionsWebPart.prototype.checkUserPermissionForDeletion = function () {
        var email = this.context.pageContext.user.loginName;
        var compName = "Video Gallery";
        checkUserinGroup(compName, email, function (result) {
            if (result == 1) {
                $('.deleteFolder').show();
                $('#AddingButtons').show();
            }
            else {
                $('.deleteFolder').hide();
                $('#AddingButtons').hide();
            }
        });
    };
    // DISPLAY ITEMS 
    /****** START ******/
    VideoGalleryCollectionsWebPart.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ImgHtml, ImgSrc, EventTitle, columnArray, picItems, itemLength, arr, Flag2, i, eventname, arrFlag, j, k;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ImgHtml = "";
                        ImgSrc = "";
                        EventTitle = "";
                        columnArray = ["ID", "FileLeafRef", "FileSystemObjectType", "FileDirRef"];
                        return [4 /*yield*/, readItems("Video Gallery", columnArray, 5000, "ID")];
                    case 1:
                        picItems = _a.sent();
                        itemLength = picItems.length;
                        arr = [];
                        Flag2 = 0;
                        for (i = 0; i < itemLength; i++) {
                            eventname = picItems[i].FileLeafRef;
                            if (eventname != undefined) {
                                if ($.inArray(eventname, arr) < 0) {
                                    arr.push(eventname);
                                }
                            }
                        }
                        arrFlag = 0;
                        for (j = 0; j < arr.length; j++) {
                            for (k = 0; k < itemLength; k++) {
                                if (arr[j] == picItems[k].FileLeafRef) {
                                    if (arrFlag == 0) {
                                        ImgSrc = picItems[k].FileDirRef + "/" + picItems[k].FileLeafRef;
                                        EventTitle = picItems[j].FileLeafRef;
                                        if (picItems[k].FileSystemObjectType == 1) {
                                            ImgHtml += "<div class='col-lg-2 col-md-2 col-sm-4 col-xs-12'>" +
                                                "<div class='gallery-list'>" +
                                                "<a href='" + this.context.pageContext.web.absoluteUrl + "/Pages/VideoGallery.aspx?imgeventid=" + arr[j] + "'title=''><img style='height:100px;width:100px;' src='" + this.context.pageContext.site.absoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/folder-images-icon.png'>" +
                                                "</a>" +
                                                "<button style='margin-top: 17px;margin-right: -6px;color: white;background-color: grey;' class='deleteFolder'><i class='fa fa-trash'></i></button>" +
                                                "<h4>" + EventTitle + "</h4>" +
                                                "</div>" +
                                                "</div>";
                                            arrFlag++;
                                        }
                                    }
                                }
                            }
                            arrFlag = 0;
                        }
                        $(".gallery-listsec").append(ImgHtml);
                        $('#deleteButtonField').hide();
                        checkUserinGroup("Video Gallery", this.context.pageContext.user.loginName, function (result) {
                            if (result == 1) {
                                $("#deleteButtonField").show();
                            }
                            else if (result == 0) {
                                $("#deleteButtonField").hide();
                            }
                        });
                        // DELETE FOLDER - START
                        $('.deleteFolder').click(function (event) {
                            event.preventDefault();
                            var folderName = $(this).next().text();
                            alertify.confirm("Are you sure you want to delete selected Folder ?", function (e) {
                                if (e) {
                                    alertify.success("");
                                    DeleteFolder("Video Gallery", folderName);
                                    location.reload();
                                }
                                else { }
                            }, function (e) { if (e) {
                                alertify.error("");
                            }
                            else { } }).set('closable', false).setHeader('Confirmation');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(VideoGalleryCollectionsWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    VideoGalleryCollectionsWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return VideoGalleryCollectionsWebPart;
}(BaseClientSideWebPart));
export default VideoGalleryCollectionsWebPart;

//# sourceMappingURL=VideoGalleryCollectionsWebPart.js.map
