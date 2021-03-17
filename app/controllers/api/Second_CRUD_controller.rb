
####
# This is a controller for second-level CRUD actions that ** belongs-to AND has-many ** 
# Replace every 'Change' with project-specific variable names
# Replace 'belongsToChange' with the second-level model variable that belongs to 'change'
###


# class Api::SecondaryCrudController < ApplicationController
  
#   before_action :set_change

#   def index
#     render json: @change.belongsToChange
#   end 

#   def show
#     render json: @change.belongsToChange.find(params[:id])
#   end 

#   def create 
#     belongsTo = @change.belongsToChange.new(belongsToChange_params)
#     if belongsToChange.save
#       render json: belongsToChange
#     else 
#       render json: { errors: belongsToChange.errors }, status: 422
#     end 
#   end 

#   def update
#     belongsToChange = @change.belongsToChange.find(params[:id])
#     if belongsToChange.update(belongsToChange_params)
#       render json: belongsToChange
#     else 
#       render json: { errors: belongsToChange.errors }, status: 422
#     end 
#   end 

#   def destroy
#     belongsToChange = @change.belongsToChange.find(params[:id]).destroy
#     render json: belongsToChange
#   end 

#   private

#   def belongsToChange_params
#     params.require(:belongsToChange).permit( *other parameters*)
#   end 

#   def set_change
#     @change = Change.find(params[:change_id])
#   end 

# end 