class Api::RegistrationsController < ApplicationController

    def create
        @registration = Registration.new(registration_params)
        @registration.user_id = current_user.id
        @registration.event_id = params[:id]

        if @registration.save
            @event = @registration.event
            render 'api/events/show'
            # render json: @registration
        else
            render json: @registration.errors.full_messages, status: 401
        end
    end

    def destroy
        @registration = Registration.find(params[:id])
        if @registration && @registration.destroy
            render json: { id: @registration.id }
        else
            render json: ['Registration does not exist'], status: 401
        end
    end

    private

    def registration_params
        params.require(:registration).permit(:event_id)
    end
end