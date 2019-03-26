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
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as strings from 'ImageGalleryDetailWebPartStrings';
import { checkUserinGroup, readItems, GetQueryStringParams, deleteItem } from '../../commonJS';
import 'jquery';
require('bootstrap');
var ImageGalleryDetailWebPart = (function (_super) {
    __extends(ImageGalleryDetailWebPart, _super);
    function ImageGalleryDetailWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageGalleryDetailWebPart.prototype.render = function () {
        var siteURL = this.context.pageContext.site.absoluteUrl;
        SPComponentLoader.loadCss(siteURL + "/_catalogs/masterpage/BloomHomepage/css/style.css");
        SPComponentLoader.loadScript(siteURL + "/_catalogs/masterpage/BloomHomepage/js/jquery.min.js");
        SPComponentLoader.loadScript(siteURL + "/_catalogs/masterpage/BloomHomepage/js/jssor.slider.min.js");
        this.domElement.innerHTML =
            "<div class='breadcrumb'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home'>Home</a></li>" +
                "<li><a href='" + siteURL + "/Pages/ImageGallery.aspx'>Image Gallery</a></li>" +
                "</ol>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field'>" +
                "<a href='ImageGallery.aspx' class='pointer' title='Close' style='background:#53545E;'><img src='" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Close</a>" +
                "</div>" +
                "<h2>Image Gallery</h2>" +
                "</div>" +
                "\n    <br>\n\n    <h3 class='page-title pageheader' style='margin-left:75px;margin:botton:30px;'></h3> \n    <div id=\"jssor_1\" style=\"position:relative;margin:0 auto;top:0px;left:0px;width:980px;height:480px;overflow:hidden;visibility:hidden;\"> \n    \n    <!-- Loading Screen -->\n    \n    <div data-u='loading' class='jssorl-009-spin' style='position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);'>\n        <img style='margin-top:-19px;position:relative;top:50%;width:38px;height:38px;' src='/sites/spuat/_catalogs/masterpage/BloomHomepage/images/slider-loader.svg'/>\n    </div>\n    \n    <div class=\"image-slides-cont-new\" data-u=\"slides\" style=\"cursor:default;position:relative;top:0px;left:0px;width:980px;height:380px;overflow:hidden;\">\n        \n    </div>\n\n    <!-- Thumbnail Navigator -->\n\n    <div data-u=\"thumbnavigator\" class=\"jssort101\" style=\"position:absolute;left:0px;bottom:0px;width:980px;height:100px;background-color:#000;\" data-autocenter=\"1\" data-scale-bottom=\"0.75\">\n        <div data-u=\"slides\">\n            <div data-u=\"prototype\" class=\"p\" style=\"width:190px;height:90px;\">\n                <div data-u=\"thumbnailtemplate\" class=\"t\">\n                </div>\n                <svg viewbox=\"0 0 16000 16000\" class=\"cv\">\n                    <circle class=\"a\" cx=\"8000\" cy=\"8000\" r=\"3238.1\"></circle>\n                    <line class=\"a\" x1=\"6190.5\" y1=\"8000\" x2=\"9809.5\" y2=\"8000\"></line>\n                    <line class=\"a\" x1=\"8000\" y1=\"9809.5\" x2=\"8000\" y2=\"6190.5\"></line>\n                </svg>\n            </div>\n        </div>\n    </div>\n\n    <!-- Arrow Navigator -->\n\n    <div data-u=\"arrowleft\" class=\"jssora106\" style=\"width:55px;height:55px;top:162px;left:30px;\" data-scale=\"0.75\">\n        <svg viewbox=\"0 0 16000 16000\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\">\n            <circle class=\"c\" cx=\"8000\" cy=\"8000\" r=\"6260.9\">\n            \n            </circle>\n            <polyline class=\"a\" points=\"7930.4,5495.7 5426.1,8000 7930.4,10504.3 \"></polyline>\n            <line class=\"a\" x1=\"10573.9\" y1=\"8000\" x2=\"5426.1\" y2=\"8000\"></line>\n        </svg>\n    </div>\n\n    <div data-u=\"arrowright\" class=\"jssora106\" style=\"width:55px;height:55px;top:162px;right:30px;\" data-scale=\"0.75\">\n        <svg viewbox=\"0 0 16000 16000\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\">\n            <circle class=\"c\" cx=\"8000\" cy=\"8000\" r=\"6260.9\"></circle>\n            <polyline class=\"a\" points=\"8069.6,5495.7 10573.9,8000 8069.6,10504.3 \"></polyline>\n            <line class=\"a\" x1=\"5426.1\" y1=\"8000\" x2=\"10573.9\" y2=\"8000\"></line>\n        </svg>\n    </div>\n  </div>\n    ";
        this.checkUserPermissionForDeletion();
        this.getItems();
    };
    ImageGalleryDetailWebPart.prototype.checkUserPermissionForDeletion = function () {
        var email = this.context.pageContext.user.loginName;
        var compName = "Image Gallery";
        checkUserinGroup(compName, email, function (result) {
            if (result == 1) {
                $('.deleteFolder').show();
                $('#AddingButtons').show();
                $('.delete-icon').show();
            }
            else {
                $('.deleteFolder').hide();
                $('#AddingButtons').hide();
                $('.delete-icon').hide();
            }
        });
    };
    // TRIM SPACE IN QUERY STRING
    ImageGalleryDetailWebPart.prototype.replaceAllSpaces = function (str) {
        var arr = str.split('%20');
        var modifiedStr = arr.join(' ');
        return modifiedStr;
    };
    // TRIM PLUS IN QUERY STRING
    ImageGalleryDetailWebPart.prototype.replaceAllPlus = function (str) {
        var arr = str.split('+');
        var modifiedStr = arr.join(' ');
        return modifiedStr;
    };
    // DISPLAY IMAGE ITEMS
    /****** START ******/
    ImageGalleryDetailWebPart.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var q_imgeventid, t_imgeventid, t1_imgeventid, q_imgHtml;
            return __generator(this, function (_a) {
                q_imgeventid = GetQueryStringParams("imgeventid");
                t_imgeventid = this.replaceAllSpaces(q_imgeventid);
                t1_imgeventid = this.replaceAllPlus(t_imgeventid);
                q_imgHtml = "";
                this.ImgGalDetails(t1_imgeventid, q_imgHtml);
                return [2 /*return*/];
            });
        });
    };
    ImageGalleryDetailWebPart.prototype.ImgGalDetails = function (imgeventid, ImgHtml) {
        return __awaiter(this, void 0, void 0, function () {
            var columnArray, PageHeader, picItems, picItemsLen, k, i, actFolderName, urlFolderName, folderServerURL, actImageFolderName, urlImageFolderName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        columnArray = ["ID", "Title", "FileRef", "FileLeafRef", "FileSystemObjectType", "FileDirRef", "LinkFilename"];
                        PageHeader = "";
                        return [4 /*yield*/, readItems("Image Gallery", columnArray, 5000, "ID")];
                    case 1:
                        picItems = _a.sent();
                        picItemsLen = picItems.length;
                        for (k = 0; k < picItemsLen; k++) {
                            if (picItems[k].FileSystemObjectType == 1 && picItems[k].LinkFilename == imgeventid) {
                                PageHeader = picItems[k].FileLeafRef;
                            }
                        }
                        for (i = 0; i < picItemsLen; i++) {
                            actFolderName = picItems[i].FileRef;
                            urlFolderName = actFolderName.substr(actFolderName.lastIndexOf('/') + 1);
                            if (picItems[i].FileSystemObjectType == 1 && urlFolderName == imgeventid) {
                                folderServerURL = picItems[i].FileRef;
                                this.ImageGalleryFolderchecking(folderServerURL);
                            }
                            if (picItems[i].FileSystemObjectType == 0) {
                                actImageFolderName = picItems[i].FileDirRef;
                                urlImageFolderName = actImageFolderName.substr(actImageFolderName.lastIndexOf('/') + 1);
                                if (urlImageFolderName == imgeventid) {
                                    $(".page-title").text(PageHeader);
                                    ImgHtml += "<div>" +
                                        "<img data-u='image' src='" + picItems[i].FileRef + "'><div id='deleteButtonField' class='button-field'><a class='delete-icon' title='Delete' id='" + picItems[i].ID + "'><img src='" + this.context.pageContext.site.absoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Delete</a></div></img>" +
                                        "<img data-u='thumb' src='" + picItems[i].FileRef + "' />" +
                                        "</div>";
                                }
                                this.checkUserPermissionForDeletion();
                            }
                        }
                        $('.image-slides-cont-new').append(ImgHtml);
                        $('#deleteButtonField').hide();
                        checkUserinGroup("Image Gallery", this.context.pageContext.user.loginName, function (result) {
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
                                    deleteItem("Image Gallery", itemId);
                                    location.reload();
                                }
                                else { }
                            }, function (e) { if (e) {
                                alertify.error("");
                            }
                            else { } }).set('closable', false).setHeader('Confirmation');
                        });
                        SPComponentLoader.loadScript(this.context.pageContext.site.absoluteUrl + "/_catalogs/masterpage/BloomHomepage/js/jssorScript.js");
                        return [2 /*return*/];
                }
            });
        });
    };
    // FOR NO ITEM DISPLAY VALIDATION
    ImageGalleryDetailWebPart.prototype.ImageGalleryFolderchecking = function (folderName) {
        var siteUrl = this.context.pageContext.web.absoluteUrl;
        console.log(siteUrl);
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
    /****** END *****/
    // DELETE IMAGE 
    ImageGalleryDetailWebPart.prototype.DeleteItem = function (itemId) { deleteItem("Image Gallery", itemId); };
    Object.defineProperty(ImageGalleryDetailWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ImageGalleryDetailWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ImageGalleryDetailWebPart;
}(BaseClientSideWebPart));
export default ImageGalleryDetailWebPart;

//# sourceMappingURL=ImageGalleryDetailWebPart.js.map
