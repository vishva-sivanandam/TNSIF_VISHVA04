package assignment_question;

import AssignmentQuestion3.Airfare;

public class KingFisher implements Airfare {

    private int hours;
    private double costPerHour;

    public KingFisher() {}

    public KingFisher(int hours, double costPerHour) {
        this.hours = hours;
        this.costPerHour = costPerHour;
    }

