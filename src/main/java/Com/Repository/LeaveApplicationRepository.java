package Com.Repository;

import Com.Entity.LeaveApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication,Integer> {

    public List<LeaveApplication> findByEid(int eid);

    @Query(value = "SELECT * FROM leave_application WHERE status = 'Rejected'", nativeQuery = true)
    List<LeaveApplication> findRejectedLeaves();

    @Query(value = "SELECT * FROM leave_application WHERE status = 'Approved'", nativeQuery = true)
    List<LeaveApplication> findApprovedLeaves();

    @Query(value = "SELECT * FROM leave_application WHERE status = 'Pending'", nativeQuery = true)
    List<LeaveApplication> findPendingLeaves();

}
