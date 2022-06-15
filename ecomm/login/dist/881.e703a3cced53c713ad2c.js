"use strict";(self.webpackChunklogin=self.webpackChunklogin||[]).push([[881],{881:(n,e,t)=>{t.r(e),t.d(e,{Login:()=>r});var i=t(328);function a(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var r=function(){function n(e){if(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),!e)throw new Error("Container must be defined!");this.container=e,this.init()}var e,t;return e=n,(t=[{key:"init",value:function(){this.container.innerHTML=this.render(),this.initSelectors(),this.initListeners()}},{key:"initSelectors",value:function(){this.loginFormEl=this.container.querySelector("#login-form"),this.loaderEl=this.container.querySelector(".loader"),this.loginBtnEl=this.container.querySelector("#login-btn")}},{key:"initListeners",value:function(){this.loginFormEl.addEventListener("submit",this.onSubmit.bind(this))}},{key:"render",value:function(){return'\n      <div class="app-login">\n        <div id="login-form-wrap">\n          <h2>Login</h2>\n          <form id="login-form">\n            <p>\n              <input\n                type="text"\n                id="text"\n                name="username"\n                placeholder="User Name"\n                required\n              ><i class="validation">\n                <span></span>\n                <span></span>\n              </i>\n            </p>\n            <p>\n              <input\n                type="password"\n                id="password"\n                name="password"\n                placeholder="Password"\n                required\n                minlength="4"\n              ><i class="validation">\n                <span></span>\n                <span></span>\n              </i>\n            </p>\n            <p>\n              <div class="loader hidden"></div>\n              <input type="submit" id="login-btn" value="Login">\n            </p>\n          </form>\n          <div id="create-account-wrap">\n            <p>Not a member? <a>Create Account</a><p>\n          </div>\n        </div>\n      </div>\n    '}},{key:"onSubmit",value:function(n){var e=this;n.preventDefault(),this.toggleLoading(),setTimeout((function(){e.toggleLoading(),e.dispatchSubmit({username:Object.fromEntries(new FormData(n.target)).username,token:i.faker.datatype.string(10)}),n.target.reset()}),2e3)}},{key:"toggleLoading",value:function(){this.loaderEl.classList.toggle("hidden"),this.loginBtnEl.classList.toggle("hidden")}},{key:"dispatchSubmit",value:function(n){document.dispatchEvent(new CustomEvent("login:success",{detail:n}))}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}()}}]);