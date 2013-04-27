define(["handlebars"],function() {return {
  "User/Register": "<div class=\"login-form\"><p>Create user</p><form action=\"\" class=\"fn-register-form\"><div class=\"messages\"></div><div class=\"content\"><div class=\"control-group\"><label for=\"reg-email\">Email:</label><input type=\"text\" name=\"email\" id=\"reg-email\" class=\"send\" data-valid=\"email required\"></div><div class=\"control-group\"><label for=\"reg-name\">Name:</label><input type=\"text\" name=\"name\" id=\"reg-name\" class=\"send\" data-valid=\"required\"></div><div class=\"control-group\"><label for=\"reg-password\">Pass:</label><input type=\"password\" name=\"password\" id=\"reg-password\" class=\"send\" data-valid=\"required\"></div><div class=\"control-group\"><label for=\"reg-repeat-password\">Repeat pass:</label><input type=\"password\" name=\"repeat-password\" id=\"reg-repeat-password\" data-valid=\"required same\" data-valid-same=\"password\"></div></div><input type=\"submit\" value=\"Register\" class=\"btn\"></form></div>",
  "Menu/Login": "<form class=\"navbar-form pull-right fn-login-form\"><span class=\"control-group\"><input class=\"span2 send\" name=\"email\" type=\"text\" placeholder=\"Email\" data-valid=\"email required\"></span><span class=\"control-group\"><input class=\"span2 send\" name=\"password\" type=\"password\" placeholder=\"Password\" data-valid=\"required\"></span><button type=\"submit\" class=\"btn\">Sign in</button></form>",
  "Menu/UserPanel": "<p class=\"navbar-text pull-right\">Logged in as {{name}} <a href=\"/api/user/logout\" class=\"navbar-link fn-logout\">Logout</a></p>",
  "Home/Subscribe": "<div class=\"login-form\"><p>Subscribe form</p><form action=\"/subscribe\" class=\"fn-subscribe-form\" method=\"post\"><div class=\"messages\"></div><div class=\"content\"><div class=\"control-group\"><label for=\"subscriber-email\">Email:</label><input type=\"text\" name=\"email\" placeholder=\"Email\" id=\"subscriber-email\" class=\"send\" data-valid=\"email required\"></div></div><footer><input type=\"submit\" value=\"Subscribe\" class=\"btn\"></footer></form></div>"
};});