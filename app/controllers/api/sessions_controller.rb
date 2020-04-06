class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Incorrect password'], status: 401
        else
            login!(@user)
            render 'api/events'
        end
    end

    def destroy
        logout!
        render json: { message: 'Logged out!'}
    end
    
end