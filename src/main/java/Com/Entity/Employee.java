package Com.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eid;
    private String firstname;
    private String lastname;
    private String email;
    private long contactno;
    private String gender;
    private LocalDate dob;
    private long adharno;
    private String panno;

    private LocalDate joiningdate;
    private String department;
    private String designation;
    private double salary;
    private String reportingmanager;
    private double exp;
    private String address;
    private String status;
    private String profile;

    public Employee() {
    }

    public Employee(String address, long adharno, long contactno, String department, String designation, LocalDate dob, int eid, String email, double exp, String firstname, String gender, LocalDate joiningdate, String lastname, String panno, String profile, String reportingmanager, double salary, String status) {
        this.address = address;
        this.adharno = adharno;
        this.contactno = contactno;
        this.department = department;
        this.designation = designation;
        this.dob = dob;
        this.eid = eid;
        this.email = email;
        this.exp = exp;
        this.firstname = firstname;
        this.gender = gender;
        this.joiningdate = joiningdate;
        this.lastname = lastname;
        this.panno = panno;
        this.profile = profile;
        this.reportingmanager = reportingmanager;
        this.salary = salary;
        this.status = status;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public long getAdharno() {
        return adharno;
    }

    public void setAdharno(long adharno) {
        this.adharno = adharno;
    }

    public long getContactno() {
        return contactno;
    }

    public void setContactno(long contactno) {
        this.contactno = contactno;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public int getEid() {
        return eid;
    }

    public void setEid(int eid) {
        this.eid = eid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getExp() {
        return exp;
    }

    public void setExp(double exp) {
        this.exp = exp;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public LocalDate getJoiningdate() {
        return joiningdate;
    }

    public void setJoiningdate(LocalDate joiningdate) {
        this.joiningdate = joiningdate;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPanno() {
        return panno;
    }

    public void setPanno(String panno) {
        this.panno = panno;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getReportingmanager() {
        return reportingmanager;
    }

    public void setReportingmanager(String reportingmanager) {
        this.reportingmanager = reportingmanager;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
