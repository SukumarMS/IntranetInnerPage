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
//import styles from './ViewListItemWebPart.module.scss';
import * as strings from 'ViewListItemWebPartStrings';
import pnp from "sp-pnp-js";
import 'jquery';
require('../../ExternalRef/js/jquery.richtext.js');
import '../../ExternalRef/css/richtext.min.css';
import { GetQueryStringParams, addItems, formString, updateItem, readItems, readItem, checkUserinGroup, deleteItem } from '../../commonJS';
var userflag = false;
var ViewListItemWebPart = (function (_super) {
    __extends(ViewListItemWebPart, _super);
    function ViewListItemWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewListItemWebPart.prototype.render = function () {
        var listName = GetQueryStringParams("CName").replace("%20", " ");
        this.domElement.innerHTML = "\n    <div class=\"breadcrumb\">\n        <ol id=\"ListBreadcrumbs\">\n            <li><a href=\"../Pages/Home.aspx\" class='pointer' title=\"Home\">Home</a></li>\n            <li><a id=\"ListViewBC\" class='pointer'  title=\"Home\"></a></li>\n            <li><span id=\"ViewListItemBC\"></span></li>\n        </ol>\n        \n    </div>\n            <div class=\"title-section\">\n                <h2 id=\"DocumentTitle\"></h2>\n            </div>\n            <div class=\"form-section\"> \n                <div class=\"logo-cropsec\">\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" id='Img-Part'>\n                        <div class=\"form-imgsec\">\n                        </div>\n                      </div>\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"  id='Form-Part'>\n                      </div>\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" id=\"Announcement-Sec\" style=\"display:none;\">\n                                <div class=\"card\">\n                                  <div id=\"Viewer-Tab\" class=\"tab-content\">\n                                  </div>\n                                </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n            <div class='modal'><!-- Place at bottom of page --></div>";
        this.renderhtml();
        this.FetchListItems();
    };
    ViewListItemWebPart.prototype.FetchListItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listName, ItemID, columnArray, GetListItems, _this, Doctype, Doctype, Doctype, DocName, renderOptions, arrOption, j, ViewCount, node, strconfirm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listName = GetQueryStringParams("CName").replace("%20", " ");
                        ItemID = GetQueryStringParams("CID");
                        columnArray = this.GetColumns(listName);
                        return [4 /*yield*/, readItems(listName, columnArray, 1, "Modified", "ID", ItemID)];
                    case 1:
                        GetListItems = _a.sent();
                        _this = this;
                        if (!(GetListItems.length > 0)) return [3 /*break*/, 13];
                        if (!(listName == "Banners")) return [3 /*break*/, 2];
                        $('#View-img').attr('src', GetListItems[0].Image.Url);
                        $('#txtTitle').val(GetListItems[0].Title);
                        //BannerContent: $('.richText-editor').html(),   
                        $('.richText-editor').html(GetListItems[0].BannerContent);
                        if (GetListItems[0].LinkURL != null) {
                            $('#txtHyperlink').val(GetListItems[0].LinkURL.Url);
                        }
                        else {
                            $('#DivHyperLink').hide();
                        }
                        $('#DocumentTitle').text(listName);
                        return [3 /*break*/, 12];
                    case 2:
                        if (!(listName == "Holiday")) return [3 /*break*/, 3];
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('#txtStartDate').val(new Date(GetListItems[0].EventDate).toLocaleDateString());
                        if ((GetListItems[0].EndEventDate) != null) {
                            GetListItems[0].EndEventDate = new Date(GetListItems[0].EndEventDate).toLocaleDateString();
                        }
                        else {
                            GetListItems[0].EndEventDate = "";
                        }
                        $('#txtEndDate').val(GetListItems[0].EndEventDate);
                        $('#DocumentTitle').text(listName);
                        return [3 /*break*/, 12];
                    case 3:
                        if (!(listName == "News")) return [3 /*break*/, 4];
                        $('#View-img').attr('src', GetListItems[0].Image.Url);
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('#txtDescription').val(GetListItems[0].Explanation);
                        $('#txtDate').val(new Date(GetListItems[0].Date).toLocaleDateString());
                        $('#DocumentTitle').text(listName);
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(listName == "Quick Links")) return [3 /*break*/, 5];
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('#txtHyperlink').val(GetListItems[0].LinkURL.Url);
                        $('#DocumentTitle').text("Quick Links");
                        return [3 /*break*/, 12];
                    case 5:
                        if (!(listName == "Employee Corner")) return [3 /*break*/, 6];
                        Doctype = GetListItems[0].DocumentFile.Url.split(".");
                        Doctype = Doctype[Doctype.length - 1];
                        $('#cropped-img').attr('src', this.GetDocImages(Doctype));
                        $('a.Link').attr('href', GetListItems[0].DocumentFile.Url);
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('#txtDate').val(new Date(GetListItems[0].Modified).toLocaleDateString());
                        $('#DocumentTitle').text("Employee Corner");
                        return [3 /*break*/, 12];
                    case 6:
                        if (!(listName == "Organizational Policies")) return [3 /*break*/, 7];
                        Doctype = GetListItems[0].DocumentFile.Url.split(".");
                        Doctype = Doctype[Doctype.length - 1];
                        $('#cropped-img').attr('src', this.GetDocImages(Doctype));
                        $('a.Link').attr('href', GetListItems[0].DocumentFile.Url);
                        $('#txtTitle').val(GetListItems[0].Title);
                        //$('#txtDescription').val(GetListItems[0].Explanation);
                        $('.richText-editor').html(GetListItems[0].Explanation),
                            $('#txtDepartment').val(GetListItems[0].Departments);
                        $('#DocumentTitle').text(listName);
                        return [3 /*break*/, 12];
                    case 7:
                        if (!(listName == "Corporate Discounts")) return [3 /*break*/, 8];
                        if (GetListItems[0].VendorLogo != null) {
                            $('#View-img').attr('src', GetListItems[0].VendorLogo.Url);
                        }
                        else {
                            $('#DivView-img').hide();
                        }
                        if (GetListItems[0].DocumentFile != null) {
                            Doctype = GetListItems[0].DocumentFile.Url.split(".");
                            DocName = GetListItems[0].DocumentFile.Url.split("/");
                            Doctype = Doctype[Doctype.length - 1];
                            DocName = DocName[DocName.length - 1];
                            $('#cropped-img').attr('src', this.GetDocImages(Doctype));
                            $('a.Link').attr('href', GetListItems[0].DocumentFile.Url);
                        }
                        else {
                            $('#Divcropped-img').hide();
                        }
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('#txtSitelink').val(GetListItems[0].SiteLink.Url);
                        $('#DocumentTitle').text(listName);
                        $('#LblImage').text("Vendor Logo");
                        return [3 /*break*/, 12];
                    case 8:
                        if (!(listName == "Events")) return [3 /*break*/, 9];
                        $('#View-img').attr('src', GetListItems[0].Image.Url);
                        $('#txtTitle').val(GetListItems[0].Title);
                        $('.richText-editor').html(GetListItems[0].Explanation);
                        $('#txtStartDate').val(new Date(GetListItems[0].StartDate).toLocaleDateString());
                        if ((GetListItems[0].EndDate) == null || (GetListItems[0].EndDate) == "") {
                            GetListItems[0].EndDate = "";
                        }
                        else {
                            GetListItems[0].EndDate = new Date(GetListItems[0].EndDate).toLocaleDateString();
                        }
                        $('#txtEndDate').val(GetListItems[0].EndDate);
                        $('#DocumentTitle').text(listName);
                        return [3 /*break*/, 12];
                    case 9:
                        if (!(listName == "Polls")) return [3 /*break*/, 10];
                        if (GetListItems[0].Options.split(';') != null) {
                            renderOptions = "";
                            arrOption = GetListItems[0].Options.split(';');
                            arrOption = arrOption.filter(function (v) {
                                return /\S/.test(v);
                            });
                            for (j = 0; j < arrOption.length; j++) {
                                renderOptions += arrOption[j] + "\n";
                            }
                            $('#txtQuestion').val(GetListItems[0].Question);
                            $('#txtOptions').val(renderOptions);
                            $('#DocumentTitle').text(listName);
                        }
                        else {
                            $('#txtQuestion').val(GetListItems[0].Question);
                            $('#txtOptions').val(GetListItems[0].Options);
                            $('#DocumentTitle').text(listName);
                        }
                        return [3 /*break*/, 12];
                    case 10:
                        if (!(listName == "Announcements")) return [3 /*break*/, 12];
                        $('#View-img').attr('src', GetListItems[0].Image.Url);
                        $('#LblAnnounceTitle').text(GetListItems[0].Title);
                        $('#LblAnnounceExpiryDate').text(new Date(GetListItems[0].Expires).toLocaleDateString());
                        $('.richText-editor').html(GetListItems[0].Explanation),
                            $('#DocumentTitle').text(listName);
                        return [4 /*yield*/, _this.GetViewCount(GetListItems[0].ViewedUsers)];
                    case 11:
                        ViewCount = _a.sent();
                        if (userflag == true) {
                            $('.icon-eye').nextAll().remove();
                            node = $('.icon-eye').get(0).nextSibling;
                            node.parentNode.removeChild(node);
                            if (typeof (ViewCount) === undefined) {
                                ViewCount = 1;
                            }
                            $('.icon-eye').after("Views <b>" + ViewCount + "</b>");
                        }
                        _a.label = 12;
                    case 12:
                        if (listName == "Organizational Policies") {
                            $('#ListViewBC').attr('href', this.context.pageContext.legacyPageContext.webAbsoluteUrl + '/Pages/OrganizationalPolicies.aspx');
                        }
                        else if (listName == "Corporate Discounts") {
                            $('#ListViewBC').attr('href', this.context.pageContext.legacyPageContext.webAbsoluteUrl + '/Pages/Corporatediscounts.aspx');
                        }
                        else {
                            $('#ListViewBC').attr('href', this.context.pageContext.legacyPageContext.webAbsoluteUrl + '/Pages/ListView.aspx?CName=' + listName);
                        }
                        $('#ListViewBC').text(listName + " List View");
                        $('#ViewListItemBC').text("View " + listName);
                        return [3 /*break*/, 14];
                    case 13:
                        strconfirm = "There is no Data in the ID Specified.";
                        alertify.confirm("Confirmation", strconfirm, function () {
                            window.history.back();
                        }, function () {
                            //alertify.error("EVENT CANCELED");
                        }).set('closable', false);
                        _a.label = 14;
                    case 14:
                        document.title = "View " + listName;
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewListItemWebPart.prototype.GetColumns = function (listName) {
        var Columns = [];
        switch (listName) {
            case "Announcements":
                Columns = ["Title", "Explanation", "Expires", "Image", "Display", "ViewedUsers"];
                break;
            case "Banners":
                Columns = ["Title", "Modified", "BannerContent", "Display", "Order", "Image", "LinkURL"];
                break;
            case "Polls":
                Columns = ["Title", "Modified", "Question", "Options"];
                break;
            case "Events":
                Columns = ["Title", "Modified", "StartDate", "EndDate", "Image", "Explanation"];
                break;
            case "Quick Links":
                Columns = ["Title", "Modified", "LinkURL", "Display"];
                break;
            case "Employee Corner":
                Columns = ["Title", "Modified", "Icon", "DocumentFile", "Display"];
                break;
            case "Organizational Policies":
                Columns = ["Title", "Modified", "DocumentFile", "Explanation", "Departments"];
                break;
            case "Corporate Discounts":
                Columns = ["Title", "Modified", "DocumentFile", "CorporateImage", "Hyperlink", "VendorLogo", "SiteLink"];
                break;
            case "Holiday":
                Columns = ["Title", "Modified", "EventDate", "EndEventDate", "Display"];
                break;
            case "News":
                Columns = ["Title", "Modified", "Date", "Image", "Explanation", "Display"];
                break;
        }
        return Columns;
    };
    ViewListItemWebPart.prototype.GetDocImages = function (DocType) {
        var ImageURL;
        switch (DocType) {
            case "jpeg":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/jpeg.png";
                break;
            case "ppt":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/ppt.png";
                break;
            case "xls":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/xls.png";
                break;
            case "doc":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/doc.png";
                break;
            case "docx":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/doc.png";
                break;
            case "pdf":
                ImageURL = this.context.pageContext.legacyPageContext.webAbsoluteUrl + "/_catalogs/masterpage/BloomHomepage/images/pdf.png";
                break;
        }
        return ImageURL;
    };
    ViewListItemWebPart.prototype.renderhtml = function () {
        var listName = GetQueryStringParams("CName").replace("%20", " ");
        var renderhtmlImage = "";
        var renderimage = "";
        var renderDate = "";
        var renderTitle = "";
        var renderDescription = "";
        var renderEventDate = "";
        var renderHyperlink = "";
        var renderSitelink = "";
        var renderQuestion = "";
        var renderOptions = "";
        var renderAnnounceBtns = "";
        var renderExpiryDate = "";
        var renderAnnounceTitle = "";
        var renderAnnounceExpiry = "";
        var renderAnnounceLike = "";
        var renderAnnounceDesc = "";
        var renderAnnounceTabs = "";
        var renderAnnounceTabContent = "";
        var renderAnnounceCommentTab = "";
        var renderAnnounceCommentSubmit = "";
        var renderAnnounceCommentcontent = "";
        var renderDepartment = "";
        var requirednewrichTextEditor = "";
        var newrichTextEditor = "";
        var renderhtmlFile = "";
        var renderCorporateDiscountsearch = "";
        renderhtmlImage += '<div id="Divcropped-img" >' +
            '<img id="cropped-img" src="" class="img-responsive">' +
            '<div class="image-upload" id="Download-link">' +
            '<a class="Link pointer"  title="Delete" id="Dwnd-Link">' +
            '<i>Download</i>' +
            '</a>' +
            '</div>' +
            '</div>';
        renderhtmlFile += '<div id="Divcropped-img" >' +
            '<img id="cropped-img" src="" class="img-responsive">' +
            '<div class="image-upload" id="Download-link">' +
            '<a class="Link pointer"  title="Delete" id="Dwnd-Link">' +
            '<i>Download</i>' +
            '</a>' +
            '</div>' +
            '</div>';
        renderimage += '<div id="DivView-img" >' +
            '<label id="LblImage">Image</label>' +
            '<img id="View-img" src="" class="img-responsive">' +
            '</div>';
        renderDate += '<div class="input date">' +
            '<i class="icon-calenter"></i>' +
            '<label>Date</label>' +
            '<input class="form-control" id="txtDate" type="text" value="">' +
            '</div>';
        renderTitle += '<div class="input text">' +
            '<label>Title</label>' +
            '<input id="txtTitle" class="form-control" type="text" value="">' +
            '</div>';
        renderDepartment += '<div class="input text">' +
            '<label>Department</label>' +
            '<input id="txtDepartment" class="form-control" type="text" value="">' +
            '</div>';
        renderDescription += '<div class="input textarea">' +
            '<label>Description</label>' +
            '<textarea id="txtDescription" class="form-control"></textarea>' +
            '</div>';
        requirednewrichTextEditor += "<div class='textarea input' style='cursor:not-allowed;pointer-events:none;'>" +
            "<label class='control-label'>Description</label>" +
            "<textarea id='txtrequiredDescription' class='form-control content'></textarea>" +
            "</div>";
        newrichTextEditor += "<div class='textarea input' style='cursor:not-allowed;pointer-events:none;'>" +
            "<label>Description</label>" +
            "<textarea id='txtDescription' class='form-control content'></textarea>" +
            "</div>";
        renderEventDate += '<div class="input date">' +
            '<i class="icon-calenter"></i>' +
            '<label>StartDate</label>' +
            '<input class="form-control" id="txtStartDate" type="text" value="">' +
            '</div>' +
            '<div class="input date">' +
            '<i class="icon-calenter"></i>' +
            '<label>EndDate</label>' +
            '<input class="form-control" id="txtEndDate" type="text" value="">' +
            '</div>';
        renderHyperlink += '<div id="DivHyperLink" class="input text">' +
            '<label>Link URL</label>' +
            '<input id="txtHyperlink" class="form-control" type="text" value="">' +
            '</div>';
        renderSitelink += '<div class="input text">' +
            '<label>Site Link</label>' +
            '<input id="txtSitelink" class="form-control" type="text" value="">' +
            '</div>';
        renderQuestion += '<div class="input text">' +
            '<label>Question</label>' +
            '<input id="txtQuestion" class="form-control" type="text" value="">' +
            '</div>';
        renderOptions += '<div class="input textarea">' +
            '<label>Options</label>' +
            '<textarea id="txtOptions" class="form-control"></textarea>' +
            '</div>';
        renderAnnounceBtns += '<div class="button-field save-button pointer">' +
            '<a  class="delete-icon close-icon pointer" id="closeicon" title="Delete"><i class="commonicon-close"></i>Close</a>' +
            '</div>';
        renderAnnounceTitle += '<h3 id="LblAnnounceTitle"></h3>';
        renderAnnounceExpiry += '<h5 id="LblAnnounceExpiryDate"></h5>';
        renderAnnounceDesc += '<h5 id="LblAnnounceDesc"></h5>';
        renderAnnounceLike += '<div id="divHeartCheck" class="comment-div" style="padding-top:6px">' +
            '<a  class="pointer" id="aHeartCheck"><i class="icon-heart"></i> Liked </a></li>' +
            '</div>';
        renderExpiryDate += '<div class="input date">' +
            '<i class="icon-calenter"></i>' +
            '<label>Expiry Date</label>' +
            '<input class="form-control" id="txtExpiryDate" type="text" value="">' +
            '</div>';
        renderAnnounceTabs += '<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation" class="active"><a class="pointer" href="#View" aria-controls="View" role="tab"><i class="icon-eye"></i> Views <b></b> </a></li>' +
            '<li role="presentation"><a class="pointer" href="#comments" aria-controls="comments" role="tab" data-toggle="tab"><i class="icon-comments"></i> Comments <b></b>  </a></li>' +
            '<li role="presentation"><a class="pointer" href="#like" aria-controls="like" role="tab" data-toggle="tab"><i class="icon-heart"></i>Likes <b></b> </a></li>' +
            '</ul>';
        renderAnnounceTabContent += '<div class="tab-content">' +
            '<div role="tabpanel" class="tab-pane active" id="View">' +
            '<ul id="View-Tab-Cmts">' +
            '</ul></div>' +
            '<div role="tabpanel" class="tab-pane" id="comments">' +
            '<ul id="Comments-Tab-Cmts">' +
            '</ul></div>' +
            '<div role="tabpanel" class="tab-pane" id="like">' +
            '<ul id="Like-Tab-Cmts">' +
            '</ul></div>' +
            '</div>';
        renderAnnounceCommentTab += '<div class="card col-md-12">' +
            '<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation" class="active"><a href="#comments" aria-controls="comments" role="tab" data-toggle="tab"><i class="icon-comments"></i>Comments <b> 0 </b></a></li>' +
            '</ul>' +
            '<div class="tab-content">' +
            '<div role="tabpanel" class="tab-pane active" id="comments">' +
            '<ul id="AnnounceComments">' +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>';
        renderAnnounceCommentSubmit += '<div role="tabpanel" class="tab-pane active" id="comments">' +
            '<div class="col-md-12"> <textarea style="height:100px !important;" id="txtAnnounceDesc" class="form-control form-group"></textarea>' +
            '</div>' +
            '<div class="col-md-12">' +
            '<div class="button-field save-button pull-right">' +
            '<a class="cmt-save pointer" id="Submit-Comments" title="Add New">Submit</a>' +
            '</div>' +
            '</div>' +
            '</div>';
        renderAnnounceCommentcontent += '<ul class="nav nav-tabs" role="tablist">' +
            '<li role="presentation" class="active"><a class="pointer" href="#comments" aria-controls="comments" role="tab" data-toggle="tab"><i class="icon-commentss"></i> Post Comments </a></li>' +
            '</ul>';
        renderCorporateDiscountsearch += '<input id="corporateSearch" class="CorporateDiscountsearch" type="text" placeholder="Search.." name="search">' +
            '<button type="submit"><i class="fa fa-search"></i></button>';
        if (listName == "Banners") {
            $('.form-imgsec').append(renderimage);
            $('#Form-Part').append(renderTitle + requirednewrichTextEditor + renderHyperlink);
            //$('#Download-link').hide();
        }
        else if (listName == "Holiday") {
            $('#Form-Part').append(renderTitle + renderEventDate);
            $('#Img-Part').hide();
        }
        else if (listName == "News") {
            $('.form-imgsec').append(renderimage);
            $('#Form-Part').append(renderDate + renderTitle + renderDescription);
        }
        else if (listName == "Quick Links") {
            $('#Form-Part').append(renderTitle + renderHyperlink);
            $('#Img-Part').hide();
        }
        else if (listName == "Employee Corner") {
            $('.form-imgsec').append(renderhtmlFile);
            $('#Form-Part').append(renderTitle + renderDate);
        }
        else if (listName == "Organizational Policies") {
            $('.form-imgsec').append(renderhtmlFile);
            $('#Form-Part').append(renderTitle + renderDepartment + newrichTextEditor);
        }
        else if (listName == "Corporate Discounts") {
            $('.form-imgsec').append(renderimage);
            $('#Form-Part').append(renderTitle + renderSitelink + renderhtmlFile);
        }
        else if (listName == "Events") {
            $('.form-imgsec').append(renderimage);
            $('#Form-Part').append(renderTitle + newrichTextEditor + renderEventDate);
        }
        else if (listName == "Polls") {
            $('#Form-Part').append(renderQuestion + renderOptions);
            $('#Img-Part').hide();
        }
        else if (listName == "Announcements") {
            $('.form-imgsec').append(renderimage);
            //$('#DocumentTitle').before(renderAnnounceBtns);
            $('#Form-Part').append(renderAnnounceTitle + renderAnnounceExpiry + requirednewrichTextEditor);
            $('#Announcement-Sec').show();
            var _this = this;
            var Email = this.context.pageContext.user.email;
            checkUserinGroup(listName, Email, function (result) {
                console.log(result);
                if (result == 1) {
                    $('.card').append(renderAnnounceTabs + renderAnnounceTabContent);
                    userflag = true;
                    _this.GetLikesCount();
                }
                else {
                    userflag = false;
                    $('#DivView-img').after(renderAnnounceLike);
                    $('#Viewer-Tab').before(renderAnnounceCommentcontent);
                    $('#Viewer-Tab').append(renderAnnounceCommentSubmit + renderAnnounceCommentTab);
                    _this.GetLikes();
                    _this.GetLikesCount();
                    var SubmitCmtevent = document.getElementById('Submit-Comments');
                    SubmitCmtevent.addEventListener("click", function (e) { return _this.SubmitComments(); });
                    var SubmitLikeevent = document.getElementById('aHeartCheck');
                    SubmitLikeevent.addEventListener("click", function (e) { return _this.SubmitLikes(); });
                }
                _this.GetComments(userflag);
            });
        }
        $('#DocumentTitle').before(renderAnnounceBtns);
        $('#Form-Part :input').attr("disabled", "true");
        var Closeevent = document.getElementById('closeicon');
        Closeevent.addEventListener("click", function (e) { return window.history.back(); });
        $('.content').richText();
        $('.richText-toolbar').css("display", "none");
    };
    ViewListItemWebPart.prototype.SubmitComments = function () {
        var $body = $('body');
        if ($('.ajs-message').length > 0) {
            $('.ajs-message').remove();
        }
        if (this.AnnouncementValidation()) {
            var ItemID = GetQueryStringParams("CID");
            var listName = GetQueryStringParams("CName").replace("%20", " ");
            var siteURL = this.context.pageContext.web.absoluteUrl;
            var _this = this;
            var txtAnnounceDesc = $.trim($("#txtAnnounceDesc").val()).length;
            if (txtAnnounceDesc != 0) {
                var myobjHol = {
                    Comments: $('#txtAnnounceDesc').val(),
                    AnnouncementID: ItemID
                };
                $body.addClass("loading");
                var AddComments = addItems("AnnouncementComments", myobjHol);
                AddComments.then(function (result) {
                    // if () {
                    $('#AnnounceComments').html("");
                    $('#txtAnnounceDesc').val("");
                    _this.GetComments(false);
                    $body.removeClass("loading");
                    // } else {
                    //   $body.removeClass("loading");
                    //   console.log(result);
                    // }
                });
            }
            else {
            }
        }
    };
    ViewListItemWebPart.prototype.GetComments = function (filterKey) {
        var ItemID = GetQueryStringParams("CID");
        var $body = $("body");
        var siteURL = this.context.pageContext.web.absoluteUrl;
        var Columns = ["Comments", "Editor/Title", "ID"];
        var GetComments = readItem("AnnouncementComments", Columns, 50, "Modified", "AnnouncementID", ItemID, "Editor");
        var Html = "";
        var HtmlDelComments = "";
        var _this = this;
        GetComments.then(function (items) {
            for (var i = 0; i < items.length; i++) {
                Html += '<li><h6>' + items[i].Editor.Title + '</h6>' + items[i].Comments + '</li>';
                HtmlDelComments += '<li><h6>' + items[i].Editor.Title + '</h6>' + items[i].Comments + '<a  id="' + items[i].ID + '" data-value="' + items[i].ID + '" class="icon-delete pointer"></a></li>';
            }
            if (filterKey == false) {
                $('#AnnounceComments').append(Html);
            }
            else {
                //$('#View-Tab-Cmts').append(Html);
                $("#Comments-Tab-Cmts").append(HtmlDelComments);
                var DeleteCmtevent_1 = document.getElementsByClassName('icon-delete');
                var _loop_1 = function (i_1) {
                    DeleteCmtevent_1[i_1].addEventListener("click", function (e) { return _this.DeleteComments(DeleteCmtevent_1[i_1].id); });
                };
                for (var i_1 = 0; i_1 < DeleteCmtevent_1.length; i_1++) {
                    _loop_1(i_1);
                }
            }
            $('.icon-comments').nextAll().remove();
            var node = $('.icon-comments').get(0).nextSibling;
            node.parentNode.removeChild(node);
            $('.icon-comments').after("Comments <b>" + items.length + "</b>");
        });
    };
    ViewListItemWebPart.prototype.DeleteComments = function (id) {
        var strconfirm = "Are you sure you want to delete selected Comment ?";
        var _this = this;
        alertify.confirm('Confirmation', strconfirm, function () {
            //var _this = this;
            var ItemID = GetQueryStringParams("CID");
            var listName = GetQueryStringParams("CName").replace("%20", " ");
            var $body = $("body");
            var CommentItemID = parseInt(id, 10);
            var DeleteListItems = deleteItem("AnnouncementComments", CommentItemID);
            //window.location.href = _this.context.pageContext.legacyPageContext.webAbsoluteUrl + '/Pages/Viewlistitem.aspx?CName=' + listName + '&CID=' + ItemID;
            DeleteListItems.then(function (result) {
                $('#Comments-Tab-Cmts').html("");
                $('#txtAnnounceDesc').val("");
                _this.GetComments(true);
            });
        }, function () {
        }).set('closable', false);
    };
    ViewListItemWebPart.prototype.SubmitLikes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ItemID, listName, $body, _this, Columns, matchColumns, filterValue, CommentItemID, GetLikes, myobjHol, AddLikes, myobjHol, updateLikes, myobjHol, updateLikes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ItemID = GetQueryStringParams("CID");
                        listName = "AnnouncementsLikes";
                        $body = $("body");
                        _this = this;
                        Columns = ["User", "Liked", "AnnouncementID", "ID"];
                        matchColumns = formString(Columns);
                        filterValue = this.context.pageContext.user.email;
                        CommentItemID = parseInt(ItemID, 10);
                        return [4 /*yield*/, pnp.sp.web.lists.getByTitle(listName).items.select(matchColumns).filter("User eq '" + filterValue + "' and AnnouncementID eq '" + ItemID + "'").top(1).orderBy("Modified").get()];
                    case 1:
                        GetLikes = _a.sent();
                        if (!(GetLikes.length == 0)) return [3 /*break*/, 2];
                        $('#divHeartCheck').addClass("heart-check");
                        $body.addClass("loading");
                        myobjHol = {
                            User: this.context.pageContext.user.email,
                            AnnouncementID: CommentItemID,
                            Liked: true
                        };
                        AddLikes = addItems(listName, myobjHol);
                        AddLikes.then(function (result) {
                            $('#divHeartCheck').addClass("heart-check");
                            _this.GetLikesCount();
                            $body.removeClass("loading");
                        });
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(GetLikes[0].Liked == true)) return [3 /*break*/, 4];
                        $('#divHeartCheck').removeClass("heart-check");
                        $body.addClass("loading");
                        myobjHol = {
                            Liked: false
                        };
                        return [4 /*yield*/, updateItem(listName, GetLikes[0].ID, myobjHol)];
                    case 3:
                        updateLikes = _a.sent();
                        if (updateLikes.data) {
                            $('#divHeartCheck').removeClass("heart-check");
                            _this.GetLikesCount();
                            $body.removeClass("loading");
                        }
                        else {
                            $body.removeClass("loading");
                            console.log(updateLikes);
                        }
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(GetLikes[0].Liked == false)) return [3 /*break*/, 6];
                        $('#divHeartCheck').addClass("heart-check");
                        $body.addClass("loading");
                        myobjHol = {
                            Liked: true
                        };
                        return [4 /*yield*/, updateItem(listName, GetLikes[0].ID, myobjHol)];
                    case 5:
                        updateLikes = _a.sent();
                        if (updateLikes.data) {
                            $('#divHeartCheck').addClass("heart-check");
                            _this.GetLikesCount();
                            $body.removeClass("loading");
                        }
                        else {
                            $body.removeClass("loading");
                            console.log(updateLikes);
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ViewListItemWebPart.prototype.GetLikes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ItemID, listName, Columns, matchColumns, filterValue, GetLikes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ItemID = GetQueryStringParams("CID");
                        listName = "AnnouncementsLikes";
                        Columns = ["User", "Liked", "AnnouncementID", "ID"];
                        matchColumns = formString(Columns);
                        filterValue = this.context.pageContext.user.email;
                        return [4 /*yield*/, pnp.sp.web.lists.getByTitle(listName).items.select(matchColumns).filter("User eq '" + filterValue + "' and AnnouncementID eq '" + ItemID + "'").top(1).orderBy("Modified").get()];
                    case 1:
                        GetLikes = _a.sent();
                        if (GetLikes.length != 0) {
                            if (GetLikes[0].Liked == true) {
                                $('#divHeartCheck').addClass("heart-check");
                            }
                            else {
                                $('#divHeartCheck').removeClass("heart-check");
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewListItemWebPart.prototype.nullDateValidate = function (nullDate) {
        var exdate = new Date(nullDate);
        var day = ("0" + exdate.getDate()).slice(-2);
        var month = ("0" + (exdate.getMonth() + 1)).slice(-2);
        var expiredate = exdate.getFullYear() + "/" + (month) + "/" + (day);
        return expiredate;
    };
    ViewListItemWebPart.prototype.GetLikesCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ItemID, listName, Columns, matchColumns, Html, GetLikeCount, node, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ItemID = GetQueryStringParams("CID");
                        listName = "AnnouncementsLikes";
                        Columns = ["User", "Liked", "AnnouncementID", "ID", "Editor/Title"];
                        matchColumns = formString(Columns);
                        Html = "";
                        return [4 /*yield*/, pnp.sp.web.lists.getByTitle(listName).items.select(matchColumns).expand("Editor").filter("AnnouncementID eq '" + ItemID + "' and Liked eq 1").orderBy("Modified").get()];
                    case 1:
                        GetLikeCount = _a.sent();
                        $('.icon-heart').nextAll().remove();
                        node = $('.icon-heart').get(0).nextSibling;
                        node.parentNode.removeChild(node);
                        $('.icon-heart').after("Likes <b>" + GetLikeCount.length + "</b>");
                        for (i = 0; i < GetLikeCount.length; i++) {
                            Html += '<li><h6>' + GetLikeCount[i].Editor.Title + '</h6></li>';
                        }
                        $('#Like-Tab-Cmts').html("");
                        $('#Like-Tab-Cmts').append(Html);
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewListItemWebPart.prototype.GetViewCount = function (Users) {
        return __awaiter(this, void 0, void 0, function () {
            var Email, ItemID, _this, $body, usercount, UserID, ViewedUsers, user, myobjHol, ViewCountRet, user1, myobjHol, ViewCountRet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Email = this.context.pageContext.user.email;
                        ItemID = parseInt(GetQueryStringParams("CID"));
                        _this = this;
                        $body = $("body");
                        return [4 /*yield*/, pnp.sp.site.rootWeb.ensureUser(Email).then(function (result) {
                                return result.data.Id;
                            })];
                    case 1:
                        UserID = _a.sent();
                        if (!(Users != null)) return [3 /*break*/, 5];
                        ViewedUsers = Users.split(",");
                        if (!(ViewedUsers.indexOf(UserID.toString()) > -1)) return [3 /*break*/, 2];
                        return [2 /*return*/, ViewedUsers.length];
                    case 2:
                        user = Users + "," + UserID.toString();
                        usercount = user.split(",");
                        myobjHol = {
                            ViewedUsers: user
                        };
                        return [4 /*yield*/, updateItem("Announcements", ItemID, myobjHol)];
                    case 3:
                        ViewCountRet = _a.sent();
                        return [2 /*return*/, ViewCountRet.length];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        user1 = UserID.toString();
                        usercount = 1;
                        myobjHol = {
                            ViewedUsers: user1
                        };
                        return [4 /*yield*/, updateItem("Announcements", ItemID, myobjHol)];
                    case 6:
                        ViewCountRet = _a.sent();
                        return [2 /*return*/, usercount];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ViewListItemWebPart.prototype.AnnouncementValidation = function () {
        if (!$('#txtAnnounceDesc').val().trim()) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error("Please Enter Comments");
            return false;
        }
        return true;
    };
    Object.defineProperty(ViewListItemWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ViewListItemWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return ViewListItemWebPart;
}(BaseClientSideWebPart));
export default ViewListItemWebPart;

//# sourceMappingURL=ViewListItemWebPart.js.map
