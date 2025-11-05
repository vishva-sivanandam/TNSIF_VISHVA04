package assignment_question;

import AssignmentQuestion3.Airfare;

public class Air_India implements Airfare {
    private int hours;
    private double costPerHour;

    public Air_India() {}

    public Air_India(int hours, double costPerHour) {
        this.hours = hours;
        this.costPerHour = costPerHour;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public double getCostPerHour() {
        return costPerHour;
    }

    public void setCostPerHour(double costPerHour) {
        this.costPerHour = costPerHour;
    }

    @Override
    public double calculateAmount() {
        return hours * costPerHour;
    }
} 
