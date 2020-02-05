class LoginController < ApplicationController

    def create
        user = User.find_by(username: (params[:username].downcase))

        if user && user.authenticate(params[:password])
          render json: { token: token(user.id), user_id: user.id }
        else 
          render json: { errors: [ "You done messed up!" ] }
        end 
      end    

end 