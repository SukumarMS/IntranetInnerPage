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
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import 'jquery';
//import styles from './CorporateDiscountWebPart.module.scss';
import * as strings from 'CorporateDiscountWebPartStrings';
require('jplist-core');
require('jplist-pagination');
require('../../ExternalRef/js/jplist-core.js');
require('../../ExternalRef/js/jplist-pagination.js');
import { readItems, updateItem, formatDate, checkUserinGroup, batchDelete } from '../../commonJS';
import pnp from 'sp-pnp-js';
var CorporateDiscountWebPart = (function (_super) {
    __extends(CorporateDiscountWebPart, _super);
    function CorporateDiscountWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userflag = false;
        return _this;
    }
    CorporateDiscountWebPart.prototype.render = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        var _thatt = this;
        checkUserinGroup("Corporate Discounts", this.context.pageContext.user.email, function (result) {
            if (result == 1) {
                _thatt.userflag = true;
                _thatt.loadcomponent();
            }
            else {
                _thatt.userflag = false;
                _thatt.loadcomponent();
            }
        });
    };
    CorporateDiscountWebPart.prototype.loadcomponent = function () {
        var _this = this;
        var siteURL = this.context.pageContext.web.absoluteUrl;
        this.domElement.innerHTML =
            "<div class='breadcrumb bread-pos'>" +
                "<ol>" +
                "<li><a href='" + siteURL + "/Pages/Home.aspx' title='Home' class='pointer'>Home</a></li>" +
                "<li><span>Corporate Discounts</span></li>" +
                "</ol>" +
                "<div class='input search'>" +
                "<input id='customSearch' class='CorporateDiscountsearch form-control' type='text' placeholder='Search..' name='search'>" +
                "<a id='corporateSearch' class='close-searchicon pointer' title='search'>" +
                "<i class='icon-search' style='float:right; margin: -20px 10px 10px 5px;'></i></a></div>" +
                "</div>" +
                "<div class='title-section'>" +
                "<div class='button-field'>" +
                "<a href='" + siteURL + "/Pages/AddListItem.aspx?CName=Corporate%20Discounts' title='Add New' class='pointer' id='AddingButtons'><i class='icon-add'></i>Add New</a>" +
                "<a class='delete-icon pointer' title='Delete' id='DeletingButtons'><img src='" + siteURL + "/_catalogs/masterpage/BloomHomepage/images/close-icon.png'>Delete</a>" +
                "</div>" +
                "<h2>Corporate Discounts</h2>" +
                "</div>" +
                "<div class='content-area'>" +
                "</div>" +
                "<div class='modal'><!-- Place at bottom of page --></div>";
        this.CorDis(null);
        var customsearchevent = document.getElementById('corporateSearch');
        //for (let i = 0; i < Addevent.length; i++) {
        var _globalthis = this;
        customsearchevent.addEventListener("click", function (e) { return _this.corporateSearch(); });
        document.title = "Corporate Discounts";
        $(document).keypress(function (event) {
            var keycode = event.which || event.keyCode || event.charCode;
            if (keycode == '13') {
                if ($('.ajs-message').length > 0) {
                    $('.ajs-message').remove();
                }
                var isSearch = true;
                if (!$('#customSearch').val().trim()) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error("Please Enter the Value");
                    isSearch = false;
                    //isAllfield = false;
                }
                if (isSearch) {
                    var searchvalue = $('#customSearch').val().trim();
                    _globalthis.CorDis(searchvalue);
                }
            }
        });
        $(document).on('keypress', function () {
        }).on('keydown', function (e) {
            if (e.keyCode == 8 && !$('#customSearch').val().substring(1)) {
                location.reload();
            }
        });
    };
    CorporateDiscountWebPart.prototype.corporateSearch = function () {
        if ($('.ajs-message').length > 0) {
            $('.ajs-message').remove();
        }
        var isSearch = true;
        if (!$('#customSearch').val().trim()) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error("Please Enter the Value");
            isSearch = false;
        }
        if (isSearch) {
            var searchvalue = $('#customSearch').val().trim();
            this.CorDis(searchvalue);
        }
    };
    CorporateDiscountWebPart.prototype.CorDis = function (searchText) {
        var _this = this;
        //var searchvalue = "Testing";
        var Corporate = "<div id='pagination-list' class='list-section jplist'><ul class='list'>";
        var count = 50;
        var checkboxstatus = "";
        var strcheckboxstatus = "Not Displayed";
        var objResults;
        if (searchText && this.userflag) {
            objResults = pnp.sp.web.lists.getByTitle("Corporate%20Discounts").items.select("ID", "Title", "Modified", "VendorLogo", "SiteLink", "Display").filter(("Title eq '" + searchText + "'") || "SiteLink eq '" + searchText + "'").top(100).get();
            //('Title eq '+searchText+' or SiteLink eq '+searchText+'')
        }
        else if (searchText && this.userflag == false) {
            // objResults = pnp.sp.web.lists.getByTitle("Corporate%20Discounts").items.select("ID", "Title", "Modified", "VendorLogo", "SiteLink", "Display").filter(("Title eq '" + searchText + "'") || "SiteLink eq '" + searchText + "'").top(100).get();
            objResults = pnp.sp.web.lists.getByTitle("Corporate%20Discounts").items.select("ID", "Title", "Modified", "VendorLogo", "SiteLink", "Display").filter("(Display eq '1' and Title eq '" + searchText + "' )" || "SiteLink eq '" + searchText + "'").top(100).get();
        }
        else {
            if (this.userflag == false) {
                objResults = readItems("Corporate%20Discounts", ["ID", "Title", "Modified", "VendorLogo", "SiteLink", "Display"], count, "Modified", "Display", 1);
            }
            else {
                objResults = readItems("Corporate%20Discounts", ["ID", "Title", "Modified", "VendorLogo", "SiteLink", "Display"], count, "Modified");
            }
        }
        objResults.then(function (items) {
            $('.content-area').empty();
            if (items.length > 0) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].Display == "1") {
                        checkboxstatus = "checked";
                        strcheckboxstatus = "Displayed";
                    }
                    else {
                        checkboxstatus = "";
                        strcheckboxstatus = "Not Displayed";
                    }
                    Corporate += "<li class='list-item'>" +
                        "<div class='list-imgcont'>" +
                        "<div class='list-imgsec list-imgsec" + i + "'>" +
                        "</div>" +
                        "<p class='Modified'><strong>" + formatDate(items[i].Modified) + "</strong></p>" +
                        "<h3 class='CorTitle'>" + items[i].Title + "</h3>" +
                        "<div class='switch'>" +
                        "<input type='checkbox' id='switch" + items[i].ID + "' class='switch-input sndswitch' " + checkboxstatus + "/>" +
                        "<label for='switch" + items[i].ID + "' class='switch-label sndswitch'>" + strcheckboxstatus + "</label>" +
                        "<div class='list-icons'>" +
                        "<div class='icon-list2 viewitem'>" +
                        "<a  title='View' class='viewitem pointer'  id='viewitem" + items[i].ID + "'><i class='icon-eye viewitem'></i></a>" +
                        "</div>" +
                        "<div class='icon-list2 edititemuser edititem'>" +
                        "<a  title='Edit' class='edititem pointer' id='edititem" + items[i].ID + "'><i class='icon-edit edititem' ></i></a>" +
                        "</div>" +
                        "<div class='icon-list2 deleteitemuser'>" +
                        "<div class='check-box'>" +
                        "<input type='checkbox' name='' value='' class='delete-item' id='deleteitem" + items[i].ID + "'/>" +
                        "<label>Checkbox</label>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</div>" +
                        "</li>";
                }
            }
            else {
                Corporate += "<li class='list-item'>No items to display" +
                    "</li>";
            }
            Corporate += "</ul>";
            Corporate += "<div class='jplist-panel box panel-top'>" +
                "<div class='jplist-pagination' data-control-type='pagination' data-control-name='paging' data-control-action='paging'></div>" +
                "<select class='jplist-select' data-control-type='items-per-page-select' data-control-name='paging' data-control-action='paging'>" +
                "<option data-number='5' data-default='true'> 5 </option>" +
                "<option data-number='10'> 10 </option>" +
                "<option data-number='15'> 15 </option>" +
                "</select>" +
                "</div>";
            $('.content-area').append(Corporate);
            for (var i = 0; i < items.length; i++) {
                if (items[i].VendorLogo != null) {
                    $('.list-imgsec' + i).append("<img src='" + items[i].VendorLogo.Url + "' alt='' title=''>");
                }
                else {
                    var siteURL = _this.context.pageContext.web.absoluteUrl;
                    var defaultimage = siteURL + "/_catalogs/masterpage/BloomHomepage/images/logo.png";
                    $('.list-imgsec' + i).append("<img src='" + defaultimage + "' alt='' title=''>");
                }
            }
            if (_this.userflag == false) {
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
            var Viewevent = document.getElementsByClassName('viewitem');
            for (var i = 0; i < Viewevent.length; i++) {
                Viewevent[i].addEventListener("click", function (e) { return _this.viewitem(); });
            }
            var Editevent = document.getElementsByClassName('edititem');
            for (var i = 0; i < Editevent.length; i++) {
                Editevent[i].addEventListener("click", function (e) { return _this.edititem(); });
            }
            var deleteevent = document.getElementById("DeletingButtons");
            deleteevent.addEventListener("click", function (e) { return _this.deleteitems(); });
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
                    var item = updateItem("Corporate%20Discounts", id, myobj);
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
                    var item = updateItem("Corporate%20Discounts", id, myobj);
                    item.then(function (items) {
                        // console.log("Success update false");
                    });
                }
            });
        });
    };
    CorporateDiscountWebPart.prototype.viewitem = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        $('a.viewitem').click(function () {
            var id = $(this).attr('id');
            window.location.href = "" + siteURL + "/Pages/Viewlistitem.aspx?CName=Corporate%20Discounts&CID=" + $(this).attr('id').replace('viewitem', '') + "&CMode=ViewMode";
        });
    };
    CorporateDiscountWebPart.prototype.edititem = function () {
        var siteURL = this.context.pageContext.web.absoluteUrl;
        $('a.edititem').click(function () {
            var id = $(this).attr('id');
            window.location.href = "" + siteURL + "/Pages/EditListItem.aspx?CName=Corporate%20Discounts&CID=" + $(this).attr('id').replace('edititem', '') + "&CMode=EditMode";
        });
    };
    CorporateDiscountWebPart.prototype.deleteitems = function () {
        var strLocalStorage = "Corporate Discounts";
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
    Object.defineProperty(CorporateDiscountWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CorporateDiscountWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return CorporateDiscountWebPart;
}(BaseClientSideWebPart));
export default CorporateDiscountWebPart;

//# sourceMappingURL=CorporateDiscountWebPart.js.map
