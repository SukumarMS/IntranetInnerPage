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
import 'jquery';
import pnp from 'sp-pnp-js';
//import styles from './OrganizationPolicyWebPart.module.scss';
import * as strings from 'OrganizationPolicyWebPartStrings';
require('jplist-core');
require('jplist-pagination');
require('../../ExternalRef/js/jplist-core.js');
require('../../ExternalRef/js/jplist-pagination.js');
require('../../ExternalRef/js/bootstrap-select.min.js');
import { updateItem, formatDate, checkUserinGroup, GetQueryStringParams, batchDelete } from '../../commonJS';
var OrganizationPolicyWebPart = (function (_super) {
    __extends(OrganizationPolicyWebPart, _super);
    function OrganizationPolicyWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userflag = false;
        return _this;
    }
    OrganizationPolicyWebPart.prototype.render = function () {
        var _thatt = this;
        checkUserinGroup("Organizational Policies", this.context.pageContext.user.email, function (result) {
            if (result == 1) {
                _thatt.userflag = true;
                _thatt.loadcomponent();
            }
            else {
                _thatt.userflag = false;
                _thatt.loadcomponent();
            }
        });
        document.title = "Organizational Policies";
    };
    OrganizationPolicyWebPart.prototype.loadcomponent = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        var strLocalStorage = GetQueryStringParams("CName").replace("%20", " ");
        this.domElement.innerHTML =
            "<div class='breadcrumb'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home' class='pointer'>Home</a></li>" +
                "<li><span>Organizational Policies</span></li>" +
                "</ol>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field'>" +
                "<a href='" + siteURL + "/Pages/AddListItem.aspx?CName=Organizational%20Policies' title='Add New' class='pointer' id='AddingButtons'><i class='icon-add'></i>Add New</a>" +
                "<a class='delete-icon DeletingButtons pointer' title='Delete' id='DeletingButtons'><img src='" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Delete</a>" +
                "</div>" +
                "<h2>Organizational Policies</h2>" +
                "</div>" +
                "</div></div>" +
                "<div class='content-area'>" +
                "</div>" +
                "<div class='modal'><!-- Place at bottom of page --></div>";
        this.OrgPage();
    };
    OrganizationPolicyWebPart.prototype.OrgPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var Organ, count, checkboxstatus, strcheckboxstatus, dept, strLocalStorage, items, i, Viewevent, i, Editevent, i, deleteevent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Organ = "<div id='pagination-list' class='list-section jplist'><ul class='list'>";
                        count = 50;
                        checkboxstatus = "";
                        strcheckboxstatus = "Not Displayed";
                        if (this.userflag == false) {
                            $('.button-field').hide();
                        }
                        dept = "Admin";
                        dept = GetQueryStringParams("CName").replace("%20", " ");
                        strLocalStorage = "";
                        if (strLocalStorage == "") {
                            strLocalStorage = "Organizational%20Policies";
                        }
                        if (!(this.userflag == false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, pnp.sp.web.lists.getByTitle(strLocalStorage).items.filter("Departments eq '" + dept + "' and Display eq 1").top(count).orderBy("Modified").get()];
                    case 1:
                        items = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, pnp.sp.web.lists.getByTitle(strLocalStorage).items.filter("Departments eq '" + dept + "'").top(count).orderBy("Modified").get()];
                    case 3:
                        items = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (items.length > 0) {
                            //objResults.then((items: any[]) => {
                            for (i = 0; i < items.length; i++) {
                                if (items[i].Display == "1") {
                                    checkboxstatus = "checked";
                                    strcheckboxstatus = "Displayed";
                                }
                                else {
                                    checkboxstatus = "";
                                    strcheckboxstatus = "Not Displayed";
                                }
                                if (items[i].Explanation != null && items[i].Explanation > 160) {
                                    items[i].Explanation = items[i].Explanation.substring(0, 160) + "...";
                                }
                                else if (items[i].Explanation == null) {
                                    items[i].Explanation = "";
                                }
                                Organ += "<li class='list-item'>" +
                                    "<div class='list-imgcont' >" +
                                    "<p class='Modified'><strong>" + formatDate(items[i].Modified) + "</strong></p>" +
                                    "<a href='" + items[i].DocumentFile.Url + "' target='_blank'><h3 class='OrgTitle'>" + items[i].Title + "</h3></a>" +
                                    // "<p class='OrgDescrip'>" + items[i].Explanation + "</p>" +
                                    "<p class='OrgDepart'>" + items[i].Departments + "</p>" +
                                    "<div class='switch'>" +
                                    "<input type='checkbox' id='switch" + items[i].ID + "' class='switch-input sndswitch' " + checkboxstatus + "/>" +
                                    "<label for='switch" + items[i].ID + "' class='switch-label sndswitch'>" + strcheckboxstatus + "</label>" +
                                    "<div class='list-icons'>" +
                                    "<div class='icon-list2 viewitem'>" +
                                    "<a  title='View' class='viewitem pointer' id='viewitem" + items[i].ID + "'><i class='icon-eye viewitem'></i></a>" +
                                    "</div>" +
                                    "<div class='icon-list2 edititemuser edititem'>" +
                                    "<a  title='Edit' class='edititem pointer' id='edititem" + items[i].ID + "'><i class='icon-edit edititem'></i></a>" +
                                    "</div>" +
                                    "<div class='icon-list2 deleteitemuser'>" +
                                    "<div class='check-box'>" +
                                    "<input type='checkbox'  name='' value='' class='delete-item' id='deleteitem" + items[i].ID + "'/>" +
                                    "<label>Checkbox</label>" +
                                    "</div>" +
                                    "</div>" +
                                    "</div>" +
                                    "</div>" +
                                    "</li>";
                            }
                        }
                        else {
                            Organ += "<li class='list-item'>No items to display" +
                                "</li>";
                        }
                        Organ += "</ul>";
                        Organ += "<div class='jplist-panel box panel-top'>" +
                            "<div class='jplist-pagination' data-control-type='pagination' data-control-name='paging' data-control-action='paging'></div>" +
                            "<select class='jplist-select' data-control-type='items-per-page-select' data-control-name='paging' data-control-action='paging'>" +
                            "<option data-number='5' data-default='true'> 5 </option>" +
                            "<option data-number='10'> 10 </option>" +
                            "<option data-number='15'> 15 </option>" +
                            "</select>" +
                            "</div>";
                        $('.content-area').append(Organ);
                        Viewevent = document.getElementsByClassName('viewitem');
                        for (i = 0; i < Viewevent.length; i++) {
                            Viewevent[i].addEventListener("click", function (e) { return _this.viewitem(); });
                        }
                        Editevent = document.getElementsByClassName('edititem');
                        for (i = 0; i < Editevent.length; i++) {
                            Editevent[i].addEventListener("click", function (e) { return _this.edititem(); });
                        }
                        deleteevent = document.getElementById("DeletingButtons");
                        deleteevent.addEventListener("click", function (e) { return _this.deleteitems(); });
                        if (this.userflag == false) {
                            $('.edititemuser').hide();
                            $('.deleteitemuser').hide();
                            $('.sndswitch').hide();
                            $('.button-field').hide();
                            $('.viewitem').show();
                        }
                        else {
                            $('.edititemuser').show();
                            $('.deleteitemuser').show();
                        }
                        $('#pagination-list').jplist({
                            itemsBox: '.list',
                            itemPath: '.list-item',
                            panelPath: '.jplist-panel'
                        });
                        $(document).on('change', '.switch-input', function () {
                            var id = $(this).attr('id').replace('switch', '');
                            var _thisid = $(this);
                            if (_thisid.prop("checked")) {
                                var myobj = {
                                    Display: true
                                };
                                _thisid.next().text("Displayed");
                                _thisid.attr("checked", "checked");
                                var item = updateItem("Organizational%20Policies", id, myobj);
                                item.then(function (items) {
                                    //console.log("Success update true");
                                });
                            }
                            else {
                                var myobj = {
                                    Display: false
                                };
                                _thisid.next().text("Not Displayed");
                                _thisid.removeAttr('checked');
                                var item = updateItem("Organizational%20Policies", id, myobj);
                                item.then(function (items) {
                                    //console.log("Success update false");
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrganizationPolicyWebPart.prototype.Depart = function () {
        var _this = this;
        var strLocalStorage = GetQueryStringParams("CName");
        if (strLocalStorage === undefined) {
            strLocalStorage = "Organizational%20Policies";
        }
        var DepName = "";
        pnp.sp.web.lists.getByTitle(strLocalStorage).items.get()
            .then(function (items) {
            if (items.length > 0) {
                var flags = [], output = [], l = items.length, i;
                for (i = 0; i < l; i++) {
                    if (flags[items[i].Departments])
                        continue;
                    flags[items[i].Departments] = true;
                    output.push(items[i].Departments);
                }
                for (var k = 0; k < output.length; k++) {
                    DepName += "<option value='" + output[k] + "'>" + output[k] + "</option>";
                }
                $('.selectpicker').append(DepName);
                $('.selectpicker').selectpicker();
            }
        }).then(function (r) {
            _this.OrgPage();
        });
    };
    OrganizationPolicyWebPart.prototype.viewitem = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        $('a.viewitem').click(function () {
            var id = $(this).attr('id');
            window.location.href = "" + siteURL + "/Pages/Viewlistitem.aspx?CName=Organizational%20Policies&CID=" + $(this).attr('id').replace('viewitem', '') + "&CMode=ViewMode";
        });
    };
    OrganizationPolicyWebPart.prototype.edititem = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        $('a.edititem').click(function () {
            var id = $(this).attr('id');
            window.location.href = "" + siteURL + "/Pages/EditListItem.aspx?CName=Organizational%20Policies&CID=" + $(this).attr('id').replace('edititem', '') + "&CMode=EditMode";
        });
    };
    OrganizationPolicyWebPart.prototype.deleteitems = function () {
        var strLocalStorage = "Organizational%20Policies";
        var deleteitemID = [];
        var $body = $('body');
        $('.delete-item:checked').each(function () {
            deleteitemID.push($(this).attr('id').replace('deleteitem', ''));
        });
        if (deleteitemID.length > 0) {
            var strconfirm = "Are you sure you want to delete selected item(s)?";
            var _that = this;
            alertify.confirm('Confirmation', strconfirm, function () {
                var selectedArray = deleteitemID;
                $body.addClass("loading");
                //for (var i = 0; i < selectedArray.length; i++) {
                batchDelete(strLocalStorage, selectedArray, _that.context.pageContext.web.absoluteUrl);
                //}
                //location.reload();
            }, function () { }).set('closable', false);
        }
        else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('Please select at least one item');
        }
    };
    Object.defineProperty(OrganizationPolicyWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    OrganizationPolicyWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return OrganizationPolicyWebPart;
}(BaseClientSideWebPart));
export default OrganizationPolicyWebPart;

//# sourceMappingURL=OrganizationPolicyWebPart.js.map
