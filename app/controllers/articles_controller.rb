class ArticlesController < ApplicationController
    def index
        puts "hello"
        render json: Article.all
        # render html: 'this is text'
    end

    def show
        render json: Article.find(params[:id])
    end

end

