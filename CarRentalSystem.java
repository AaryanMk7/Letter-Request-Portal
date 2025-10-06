// Car Rental System - Skeleton Code based on UML Diagram

// Company class
class Company {
    // Constructor
    public Company() {
        // Initialize company
    }
    
    // Add methods
    public void add(Renter aRenter) {
        // Add a renter to the company
    }
    
    public void add(Car aCar) {
        // Add a car to the company
    }
    
    public void add(Rental aRental) {
        // Add a rental to the company
    }
}

// Rental class
class Rental {
    // Private attributes
    private Renter renter;
    private Car car;
    
    // Constructor
    public Rental(Renter aRenter, Car aCar) {
        this.renter = aRenter;
        this.car = aCar;
    }
    
    // Getter methods
    public Renter getRenter() {
        return renter;
    }
    
    public Car getCar() {
        return car;
    }
    
    // Setter methods
    public void setRenter(Renter renter) {
        this.renter = renter;
    }
    
    public void setCar(Car car) {
        this.car = car;
    }
}

// Renter class
class Renter {
    // Constructor
    public Renter() {
        // Initialize renter
    }
    
    // Additional attributes and methods can be added here
    // (not specified in the UML diagram)
}

// Car class
class Car {
    // Constructor
    public Car() {
        // Initialize car
    }
    
    // Additional attributes and methods can be added here
    // (not specified in the UML diagram)
}

// Main class for testing
public class CarRentalSystem {
    public static void main(String[] args) {
        // Create instances
        Company company = new Company();
        Renter renter = new Renter();
        Car car = new Car();
        Rental rental = new Rental(renter, car);
        
        // Add to company
        company.add(renter);
        company.add(car);
        company.add(rental);
        
        System.out.println("Car rental system initialized successfully!");
    }
}
