function checkToggle(e){e.prop("checked",!0)}function writeCookie(e,t,n){var o,i;n?(o=new Date,o.setTime(o.getTime()+1e3*60*60*24*n),i="; expires="+o.toGMTString()):i="",document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t,n,o,i=e+"=";for(o=document.cookie.split(";"),t=0;o.length>t;t++){for(n=o[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}return""}jQuery(function(e){function t(t){return e("<div />",{"class":t})}if("/login"==window.location.pathname){var n="Welcome to Jenkins - CI Server";e("#main-panel"),e("#side-panel");var o=e('input[name="j_username"]').closest("td").prev("td").addClass("input-label"),i=e('input[name="j_password"]').closest("td").prev("td").addClass("input-label");e("a[href=signup]").closest("div").addClass("signup-container"),e("label[for='remember_me']").paddingTop=5,e("#yui-gen1-button").addClass("login-button");var r=e(".submit-button"),a=e("#main-panel div:first").addClass("login-container"),l=e('form[name="login"]').length;l&&(o.text("Username"),i.text("Password"),a.removeAttr("style"),a.wrap(t("login-outer")),a.wrap(t("login-wrapper").prepend(" <h2> "+n+" </h2> ")),r.wrap(t("button-wrapper")),e(".login-container div:last").removeAttr("style"))}}),jQuery(function(e){var t='<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show"></label>';e("#description-link").text("Edit"),e("#description").before(t),"checked"!=readCookie("toggle")?e("#description").hide():(checkToggle(e(".cmn-toggle")),e("#description").show()),e(".cmn-toggle").change(function(){e("#description").slideToggle("fast"),e(".cmn-toggle").is(":checked")?writeCookie("toggle","checked",30):writeCookie("toggle","unchecked",30)})});