class Api::RegistrationsController < ApplicationController

    def create
        @registration = Registration.new
        @registration.user_id = current_user.id
        @registration.event_id = params[:id]

        if @registration.save
            @event = @registration.event
            render 'api/events/show'
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end

end