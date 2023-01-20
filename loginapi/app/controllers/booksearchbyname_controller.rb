class BooksearchbynameController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render html: "search book by name"
    end

    def create
        current_user = User.find_by_id(session[:current_user_id])
        if (current_user.nil?)
            render json: "not authenticated user"  
        else 
        bk = Bookstock.find_by('bookName': params[:bookName])
        if(bk.nil?)
            render json: "Book does not exit"
        else
            render json: bk
            
        end
    end
    end
end
