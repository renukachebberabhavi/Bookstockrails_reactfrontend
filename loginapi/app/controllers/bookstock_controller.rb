class BookstockController < ApplicationController
    skip_before_action :verify_authenticity_token
    

    # def index
    #     puts "Got get req"
    #     # render json: "got books req"
    #     render json: Bookstock.all
    #     # current_user = Bookmanage.find_by_id(session[:current_user_id])
    #     # render json: current_user
    # end
    def index
        # current_user = User.find_by_id(session[:current_user_id])
        # if (current_user.nil?)
        #     render json: "not authenticated user"  
        # else     
        # render json: Bookstock.all
        # end
        render json: Bookstock.all
    end
    
    def show 
        v = Bookstock.find(params[:id])
        render json: v
    end
    def create
        # current_user = User.find_by_id(session[:current_user_id])
        # if (current_user.nil?)
        #     render json: "not authenticated user"  
        # else     
        
        v = !params[:bookName].empty? and !params[:bookAuthor].empty?

        if (v)
              p=Bookstock.create(
              'bookName': params[:bookName],
              'bookAuthor': params[:bookAuthor],
              'bookQuantity': params[:bookQuantity]
            )
              puts p
              render json: "Data Added"
            else
                 render json: "Data not added"
        end
        # end  
    end
    def update
        current_user = User.find_by_id(session[:current_user_id])
        if (current_user.nil?)
            render json: "not authenticated user"  
        else 
        p = Bookstock.find(params[:id].to_i)
            p.update('bookName': params[:bookName],
                'bookAuthor': params[:bookAuthor],
                'bookQuantity': params[:bookQuantity],
                
                )
            render json: "Data Updated"
        end
    end
    def destroy
        # current_user = User.find_by_id(session[:current_user_id])
        # if (current_user.nil?)
        #     render json: "not authenticated user"  
        # else  
        p = Bookstock.find(params[:id])
        p.destroy
        render json: "Data Deleted"
        # end
    end
end
