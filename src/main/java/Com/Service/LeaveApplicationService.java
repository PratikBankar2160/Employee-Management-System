package Com.Service;

import Com.Entity.LeaveApplication;
import Com.Repository.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LeaveApplicationService {

    @Autowired
    private LeaveApplicationRepository repo;

    public LeaveApplication applyForLeave(LeaveApplication leave) {
        leave.setStatus("Pending");
        return repo.save(leave);
    }

    public List<LeaveApplication> findAllLeaveDetails() {
        return repo.findAll();
    }

    public List<LeaveApplication> findLeaveListByEmpId(int empid) {
        return repo.findByEid(empid);
    }

    public void cancelLeave(int leaveid) {
        repo.deleteById(leaveid);
    }

    public LeaveApplication updateLeave(int leaveid, LeaveApplication updatedLeave) {
        LeaveApplication leave = repo.findById(leaveid)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        leave.setFromdate(updatedLeave.getFromdate());
        leave.setTodate(updatedLeave.getTodate());
        leave.setReason(updatedLeave.getReason());

        return repo.save(leave);
    }


    public LeaveApplication updateLeaveStatus(int leaveid, String action) {
        LeaveApplication leave = repo
                .findById(leaveid)
                .orElseThrow(() -> new RuntimeException("Leave not found"));

        if (action.equalsIgnoreCase("approve")) {
            leave.setStatus("Approved");
        } else if (action.equalsIgnoreCase("reject")) {
            leave.setStatus("Rejected");
        }

        return repo.save(leave);
    }


}
