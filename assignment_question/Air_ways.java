package assignment_question;

import java.util.Scanner;

import AssignmentQuestion3.Air_India;
import AssignmentQuestion3.Airfare;
import AssignmentQuestion3.Indigo;
import AssignmentQuestion3.KingFisher;

public class Air_ways {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("1.AirIndia\n2.KingFisher\n3.Indigo\nEnter your choice:");
        int choice = Integer.parseInt(sc.nextLine());
        System.out.println("How many hours of Travel:");
        int hours = Integer.parseInt(sc.nextLine());
        System.out.println("Enter the cost for 1 hours:");
        double costPerHour = Double.parseDouble(sc.nextLine());

        Airfare airfare = null;

        switch (choice) {
            case 1:
                airfare = new Air_India(hours, costPerHour);
                break;
            case 2:
                airfare = new KingFisher(hours, costPerHour);
                break;
            case 3:
                airfare = new Indigo(hours, costPerHour);
                break;
            default:
                System.out.println("Invalid choice");
                System.exit(0);
        }

        double amount = airfare.calculateAmount();
        System.out.printf("%.2f\n", amount);
    }
}
