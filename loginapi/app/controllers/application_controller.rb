class ApplicationController < ActionController::Base
    def landingpage
        render html: "Welcome to loginapi page"
    end
end
