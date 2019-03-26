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
import * as strings from 'VideoGalleryWebPartStrings';
import 'jquery';
require('bootstrap');
import { SPComponentLoader } from '@microsoft/sp-loader';
import { GetQueryStringParams, checkUserinGroup, readItems, deleteItem } from '../../commonJS';
var VideoGalleryWebPart = (function (_super) {
    __extends(VideoGalleryWebPart, _super);
    function VideoGalleryWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoGalleryWebPart.prototype.render = function () {
        SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
        var siteURL = this.context.pageContext.site.absoluteUrl;
        this.domElement.innerHTML =
            "<div class='breadcrumb'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home'>Home</a></li>" +
                "<li><a href='" + siteURL + "/Pages/VideoGallery.aspx'>Video Gallery</a></li>" +
                "</ol>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field'>" +
                "<a href='" + siteURL + "/Pages/AddListItem.aspx?CName=Video Gallery' title='Add New' class='pointer' id='AddingButtons'><i class='icon-add'></i>Add New</a>" +
                "<a href='" + siteURL + "/Pages/Home.aspx' class='delete-icon pointer' title='Close'><img src='" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Close</a>" +
                "</div>" +
                "<h2 class='page-title'>Video Gallery</h2>" +
                "</div>" +
                "\n    <div class=\"gallery-listsec\">\n\n    </div>\n    ";
        this.checkUserPermissionForDeletion();
        this.getItems();
    };
    VideoGalleryWebPart.prototype.checkUserPermissionForDeletion = function () {
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
    // TRIM SPACE IN QUERY STRING
    VideoGalleryWebPart.prototype.replaceAllSpaces = function (str) {
        var arr = str.split('%20');
        var modifiedStr = arr.join(' ');
        return modifiedStr;
    };
    // TRIM PLUS IN QUERY STRING
    VideoGalleryWebPart.prototype.replaceAllPlus = function (str) {
        var arr = str.split('+');
        var modifiedStr = arr.join(' ');
        return modifiedStr;
    };
    // DISPLAY IMAGE ITEMS
    /****** START ******/
    VideoGalleryWebPart.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var q_imgeventid, t_imgeventid, t1_imgeventid, q_imgHtml;
            return __generator(this, function (_a) {
                q_imgeventid = GetQueryStringParams("imgeventid");
                t_imgeventid = this.replaceAllSpaces(q_imgeventid);
                t1_imgeventid = this.replaceAllPlus(t_imgeventid);
                q_imgHtml = "";
                this.VidGalDetails(t1_imgeventid, q_imgHtml);
                return [2 /*return*/];
            });
        });
    };
    VideoGalleryWebPart.prototype.VidGalDetails = function (imgeventid, ImgHtml) {
        return __awaiter(this, void 0, void 0, function () {
            var columnArray, PageHeader, VidHtml, VidSrc, VidItems, VidItemsLen, arr, EventTitle, i, eventname, k, i, actFolderName, urlFolderName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columnArray = ["ID", "Title", "FileRef", "FileLeafRef", "FileSystemObjectType", "FileDirRef", "LinkFilename", "LinkURL"];
                        PageHeader = "";
                        VidHtml = "";
                        VidSrc = "";
                        return [4 /*yield*/, readItems("Video Gallery", columnArray, 5000, "ID")];
                    case 1:
                        VidItems = _a.sent();
                        VidItemsLen = VidItems.length;
                        arr = [];
                        EventTitle = "";
                        for (i = 0; i < VidItemsLen; i++) {
                            eventname = VidItems[i].FileLeafRef;
                            if (eventname != undefined) {
                                if ($.inArray(eventname, arr) < 0) {
                                    arr.push(eventname);
                                }
                            }
                        }
                        for (k = 0; k < VidItemsLen; k++) {
                            if (VidItems[k].FileSystemObjectType == 1 && VidItems[k].LinkFilename == imgeventid) {
                                PageHeader = VidItems[k].FileLeafRef;
                            }
                        }
                        for (i = 0; i < VidItemsLen; i++) {
                            if (VidItems[i].FileSystemObjectType == 0) {
                                actFolderName = VidItems[i].FileDirRef;
                                urlFolderName = actFolderName.substr(actFolderName.lastIndexOf('/') + 1);
                                if (urlFolderName == imgeventid && VidItems[i].FileSystemObjectType == 0) {
                                    VidSrc = VidItems[i].FileDirRef + "/" + VidItems[i].FileLeafRef;
                                    $(".page-title").text(PageHeader);
                                    EventTitle = VidItems[i].FileLeafRef;
                                    if (VidItems[i].LinkURL == null) {
                                        VidHtml += "<div class='col-lg-2 col-md-2 col-sm-4 col-xs-12'>" +
                                            "<div class='gallery-list'>" +
                                            "<a target='_blank' id=" + VidItems[i].ID + " href='" + this.context.pageContext.web.absoluteUrl + "/Video%20Gallery/Forms/AllItems.aspx?id=" + VidSrc + "&parent=" + VidItems[i].FileDirRef + "'>" + "<img style='height:100px;width:100px;' src='" + this.context.pageContext.site.absoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/video-icon.jpg'>" +
                                            "</a>" +
                                            "<button style='margin-top: 17px;margin-right: -6px;color: white;background-color: grey;' class='deleteFolder'><i  class='fa fa-trash'></i></button>" +
                                            "<h4>" + EventTitle + "<span></span></h4>" +
                                            "</div>" +
                                            "</div>";
                                    }
                                    else if (VidItems[i].LinkURL != null) {
                                        VidHtml += "<div class='col-lg-2 col-md-2 col-sm-4 col-xs-12'>" +
                                            "<div class='gallery-list'>" +
                                            "<a target='_blank' id=" + VidItems[i].ID + " href='" + VidItems[i].LinkURL.Url + "'>" + "<img style='height:100px;width:100px;' src='" + this.context.pageContext.site.absoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/video-icon.jpg'>" +
                                            "</a>" +
                                            "<button style='margin-top: 17px;margin-right: -6px;color: white;background-color: grey;' class='deleteFolder'><i  class='fa fa-trash'></i></button>" +
                                            "<h4>" + EventTitle + "<span></span></h4>" +
                                            "</div>" +
                                            "</div>";
                                    }
                                }
                            }
                        }
                        $(".gallery-listsec").append(VidHtml);
                        $('#deleteButtonField').hide();
                        checkUserinGroup("Video Gallery", this.context.pageContext.user.loginName, function (result) {
                            if (result == 1) {
                                $("#deleteButtonField").show();
                            }
                            else if (result == 0) {
                                $("#deleteButtonField").hide();
                            }
                        });
                        $('.delete-icon').click(function () {
                            var itemId = $(this).parent().find('a').attr('id');
                            alertify.confirm("Are you sure you want to delete selected Image ?", function (e) {
                                if (e) {
                                    alertify.success("");
                                    deleteItem("Video Gallery", itemId);
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
    // FOR NO ITEM DISPLAY VALIDATION
    VideoGalleryWebPart.prototype.VideoGalleryFolderchecking = function (folderName) {
        var siteUrl = this.context.pageContext.web.absoluteUrl;
        $.ajax({
            url: siteUrl + "/_api/web/getfolderbyserverrelativeurl('" + folderName + "')/files?",
            type: 'GET',
            headers: {
                "Accept": "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
            },
            cache: false,
            success: function (data) {
                if (data.d.results.length == 0) {
                    $(".page-title").text("No Item to Display");
                    $('#jssor_1,.pointer').hide();
                }
            },
            error: function (data) {
                console.log(data.responseJSON.error);
            }
        });
    };
    Object.defineProperty(VideoGalleryWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    VideoGalleryWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return VideoGalleryWebPart;
}(BaseClientSideWebPart));
export default VideoGalleryWebPart;

//# sourceMappingURL=VideoGalleryWebPart.js.map
