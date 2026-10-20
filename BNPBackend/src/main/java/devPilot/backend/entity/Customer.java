package devPilot.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // =========================
    // Personal Information
    // =========================

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String phone;

    private String address;


    // =========================
    // Bank Account Information
    // =========================

    @Column(unique = true)
    private String accountNumber;

    private String accountType;

    private Double balance = 0.0;

    private String nomineeName;


    // =========================
    // User Authentication
    // =========================

    @OneToOne
    @JoinColumn(name = "user_id", unique = true)
    @JsonIgnore
    private User user;


    // =========================
    // Constructors
    // =========================

    public Customer() {
    }


    // Existing constructor
    // Keeping this so your existing code
    // does not break.

    public Customer(
            String name,
            String email,
            String phone) {

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.balance = 0.0;
    }


    // New constructor for registration

    public Customer(
            String name,
            String email,
            String phone,
            String address,
            String accountNumber,
            String accountType,
            Double balance,
            String nomineeName,
            User user) {

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
        this.nomineeName = nomineeName;
        this.user = user;
    }


    // =========================
    // Getters and Setters
    // =========================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }


    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }


    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }


    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}