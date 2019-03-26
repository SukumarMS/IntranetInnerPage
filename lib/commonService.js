import pnp from "sp-pnp-js";
function readItems(listName, listColumns, topCount, orderBy, filterKey, filterValue) {
    var matchColumns = formString(listColumns);
    if (filterKey == undefined) {
        return pnp.sp.web.lists.getByTitle(listName).items.select(matchColumns).top(topCount).orderBy(orderBy).get();
    }
    else {
        return pnp.sp.web.lists.getByTitle(listName).items.select(matchColumns).filter("" + filterKey + " eq '" + filterValue + "'").top(topCount).orderBy(orderBy).get();
    }
}
function addItems(listName, listColumns, callback) {
    return pnp.sp.web.lists.getByTitle(listName).items.add(listColumns).then(function (r) { return callback(r); });
}
function additemsattachment(listName, file, listColumns, callback) {
    return pnp.sp.web.getFolderByServerRelativeUrl(listName).files.add(file.name, file, true)
        .then(function (result) {
        result.file.listItemAllFields.get().then(function (listItemAllFields) {
            return pnp.sp.web.lists.getByTitle(listName).items.getById(listItemAllFields.Id).update(listColumns).then(function (r) { return callback(r); });
        });
    });
}
function additemsimage(listName, filename, file, listColumns, callback) {
    return pnp.sp.web.getFolderByServerRelativeUrl(listName).files.add(filename, file, true)
        .then(function (result) {
        result.file.listItemAllFields.get().then(function (listItemAllFields) {
            return pnp.sp.web.lists.getByTitle(listName).items.getById(listItemAllFields.Id).update(listColumns).then(function (r) { return callback(r); });
        });
    });
}
function updateitems(listName, id, listColumns, callback) {
    return pnp.sp.web.lists.getByTitle(listName).items.getById(id).update(listColumns).then(function (r) { return callback(r); });
}
var batch;
function batchDelete(listName, selectedArray, callback) {
    batch = pnp.sp.createBatch();
    for (var i = 0; i < selectedArray.length; i++) {
        pnp.sp.web.lists.getByTitle(listName).items.getById(selectedArray[i]).inBatch(batch).delete().then(function (r) {
            console.log(r);
        });
    }
    callback(batch);
}
function formString(listColumns) {
    var formattedString = "";
    for (var i = 0; i < listColumns.length; i++) {
        formattedString += listColumns[i] + ',';
    }
    return formattedString.slice(0, -1);
}
function formatDate(dateVal) {
    var date = new Date(dateVal);
    var year = date.getFullYear();
    var locale = "en-us";
    var month = date.toLocaleString(locale, { month: "long" });
    var dt = date.getDate();
    var dateString;
    if (dt < 10) {
        dateString = "0" + dt;
    }
    else
        dateString = dt.toString();
    return dateString + ' ' + month.substr(0, 3) + ',' + year;
}
function checkUserinGroup(Componentname, email, callback) {
    var myitems;
    pnp.sp.web.siteUsers
        .getByEmail(email)
        .groups.get()
        .then(function (items) {
        var currentComponent = Componentname;
        myitems = $.grep(items, function (obj, index) {
            if (obj.Title.indexOf(currentComponent) != -1) {
                return true;
            }
        });
        callback(myitems.length);
    });
}
function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
function base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}
export { readItems, addItems, base64ToArrayBuffer, additemsimage, additemsattachment, updateitems, batchDelete, formString, formatDate, checkUserinGroup, GetQueryStringParams };

//# sourceMappingURL=commonService.js.map
