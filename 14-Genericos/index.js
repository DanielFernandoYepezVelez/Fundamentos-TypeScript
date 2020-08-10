"use strict";
var capitan_america = {
    name: 'Hulk',
    darOrden_Hulk: function() {
        console.log(this.name);
    },
};
capitan_america.darOrden_Hulk();
var capitan = {
    name: 'Hulk',
    darOrden_Hulk: function() {
        var _this = this;
        setTimeout(function() {
            console.log(_this.name);
        });
    },
};
capitan.darOrden_Hulk();