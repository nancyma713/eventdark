class Api::BookmarksController < ApplicationController

    def create
        @bookmark = Bookmark.new
        @bookmark.user_id = current_user.id
        @bookmark.event_id = params[:id]

        if @bookmark.save
            @event = @bookmark.event
            render 'api/events/show'
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
    end

    def destroy
        @bookmark = Bookmark.find_by(user_id: current_user.id, event_id: params[:id])
        @bookmark.destroy
        @event = @bookmark.event
        render 'api/events/show'
    end
    
end