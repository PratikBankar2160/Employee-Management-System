package Com.Service;

import java.time.LocalDate;
import java.util.List;
import Com.Entity.Employee;
import Com.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class BirthdayScheduler {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmailService emailService;

    // Runs every day at 8 AM
    @Scheduled(cron = "0 30 12 * * ?")
    public void sendBirthdayEmails() {
        LocalDate today = LocalDate.now();
        List<Employee> employees = employeeRepository.findAll();

        for (Employee emp : employees) {
            if (emp.getDob() != null &&
                    emp.getDob().getMonth() == today.getMonth() &&
                    emp.getDob().getDayOfMonth() == today.getDayOfMonth()) {

                emailService.sendBirthdayEmail(emp.getEmail(), emp.getFirstname());
            }
        }
    }
}
