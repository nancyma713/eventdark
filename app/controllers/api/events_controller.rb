class Api::EventsController < ApplicationController

    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status: 401
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event
            @event.destroy
            render :show
        else
            render json: ['Event does not exist'], status: 400
        end
    end
    
    def update
        @event = Event.find(params[:id])

        if @event && @event.update_attributes(event_params)
            render 'api/events/show'
        elsif !@event
            render json: ['Event does not exist'], status: 400
        else
            render json: @event.errors.full_messages, status: 401
        end
    end

    private

    def event_params
        params.require(:event).permit(:category, :title, :description, :start_date, :end_date, :owner_id)
    end
end