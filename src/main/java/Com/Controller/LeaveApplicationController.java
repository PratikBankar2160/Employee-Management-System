package Com.Controller;

import Com.Entity.LeaveApplication;
import Com.Service.LeaveApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
@CrossOrigin // for React (optional)
public class LeaveApplicationController {

    @Autowired
    private LeaveApplicationService service;

    // 1. Apply for leave
    @PostMapping("/apply")
    public LeaveApplication applyForLeave(@RequestBody LeaveApplication leave) {
        return service.applyForLeave(leave);
    }

    // 2. Get all leave details (HR / Manager)
    @GetMapping("/all")
    public List<LeaveApplication> getAllLeaveDetails() {
        return service.findAllLeaveDetails();
    }

    // 3. Get leave details by employee id
    @GetMapping("/employee/{empid}")
    public List<LeaveApplication> getLeaveByEmpId(@PathVariable int empid) {
        return service.findLeaveListByEmpId(empid);
    }

    // 4. Cancel leave by leave id
    @DeleteMapping("/cancel/{leaveid}")
    public String cancelLeave(@PathVariable int leaveid) {
        service.cancelLeave(leaveid);
        return "Leave cancelled successfully";
    }

    // 5. Update leave (fromdate, todate, reason)
    @PutMapping("/update/{leaveid}")
    public LeaveApplication updateLeave(
            @PathVariable int leaveid,
            @RequestBody LeaveApplication updatedLeave) {
        return service.updateLeave(leaveid, updatedLeave);
    }

    // 6. Approve / Reject leave
    @PutMapping("/status/{leaveid}/{action}")
    public LeaveApplication updateLeaveStatus(
            @PathVariable int leaveid,
            @PathVariable String action) {
        return service.updateLeaveStatus(leaveid, action);
    }
}


//React strict mode is off