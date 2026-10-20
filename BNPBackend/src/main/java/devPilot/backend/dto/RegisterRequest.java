package devPilot.backend.dto;

public class RegisterRequest {

    // =========================
    // Personal Information
    // =========================

    private String name;

    private String email;

    private String password;

    private String phone;

    private String address;


    // =========================
    // Bank Account Information
    // =========================

    private String accountType;

    private Double initialDeposit;

    private String nomineeName;


    // =========================
    // Constructors
    // =========================

    public RegisterRequest() {
    }


    // =========================
    // Getters and Setters
    // =========================

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


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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


    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }


    public Double getInitialDeposit() {
        return initialDeposit;
    }

    public void setInitialDeposit(Double initialDeposit) {
        this.initialDeposit = initialDeposit;
    }


    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }
}