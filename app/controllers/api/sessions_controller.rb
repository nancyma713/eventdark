class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Incorrect email and password combination'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: { message: 'Logged out!'}
        else 
            render json: ['Not logged in'],  status: 404
        end
    end

    def email
        @user = User.find_by(email: params[:email])
        if @user.nil?
            render json: { email: params[:email], exist: false }
        else
            email = @user.email
            render json: { email: email, exist: true }
        end
    end
    
end