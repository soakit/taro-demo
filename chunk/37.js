(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"92":function(t,i,n){"use strict";n.r(i),n.d(i,"taro_switch_core",(function(){return c}));var o=n(29),c=function(){function e(t){var i=this;Object(o.g)(this,t),this.onChange=Object(o.c)(this,"change",7),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.nativeProps={},this.isWillLoadCalled=!1,this.switchChange=function(t){t.stopPropagation();var n=t.target.checked;i.isChecked=n,i.onChange.emit({"value":n})}}return e.prototype.function=function(t,i){this.isWillLoadCalled&&t!==i&&(this.isChecked=t)},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0,this.isChecked=this.checked},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.isChecked},"configurable":!0})},e.prototype.render=function(){var t=this,i=t.type,n=t.color,c=t.isChecked,s=t.name,r=t.disabled,h=t.nativeProps,a=c?{"borderColor":n||"04BE02","backgroundColor":n||"04BE02"}:{};return Object(o.e)("input",Object.assign({"type":"checkbox","class":"weui-"+i,"style":a,"checked":c,"name":s,"disabled":r,"onChange":this.switchChange},h))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function(){return{"checked":["function"]}},"enumerable":!1,"configurable":!0}),e}();c.style="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"}}]);