class Api::BookmarksController < ApplicationController

    def create
        @bookmark = Bookmark.new(bookmark_params)
        @bookmark.user_id = current_user.id

        if @bookmark.save
            @event = @bookmark.event
            render 'api/events/show'
        else
            render json: @bookmark.errors.full_messages, status: 401
        end
    end

    def destroy
        @bookmark = Bookmark.find(params[:id])
        if @bookmark && @bookmark.destroy
            render json: { id: @bookmark.id }
        else
            render json: ['Bookmark does not exist'], status: 401
        end
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:event_id, :user_id)
    end
end