# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb



# Add comments to your code explaining your approach




# this will set the intial values for the bike model, wheels,and current speed
# useing the initialive method.

class Bike
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
end

# Getter methods (model, wheels, currunt_speed) are provded so it can accsess values of instence variables.


def model
    return @model
end 

def wheels
    return @wheels
end

def current_speed
    return @current_speed
end

def wheels=(new_wheels)
    @wheels = new_wheels
end 

def pedal_faster(amount)
    @current_speed += amount
    return @current_speed
end

def brake(amount)
    @current_speed -= amount
    @current_speed =[@current_speed, 0].max
    return @current_speed
end

# wheels = method allows to set a new value for the wheels variable.
# pedal faster allows speed to increase the speed ammount
# the brake will dercres the currnt speed and makes sure it doesnt go bellow 0.
# bike info will list the cuurent values describing the string.


def bike_info
    return "The #{@model} bike has #{@wheels} and is going #{@current_speed} mph."
end

end

# Rspec test will make sure it passes specs. it list the specific error and any issues you are dealing with in the code.